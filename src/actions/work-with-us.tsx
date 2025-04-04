"use server";

import { WorkWithUsSchema } from "@/schemas/work-with-us";
import { actionClient } from "@/utilities/action-client";
import { env } from "@/utilities/env";
import { bulkSubscribe, createEvent, profilesApi } from "@/utilities/klaviyo";
import { parseFullName } from "parse-full-name";

export const workWithUsAction = actionClient.schema(WorkWithUsSchema).action(async ({ parsedInput }) => {
  const { email, name } = parsedInput;
  const { first, last } = parseFullName(name);
  if (!first || !last) throw new Error("Something went wrong");
  const { body } = await profilesApi.createOrUpdateProfile({
    data: {
      attributes: {
        email,
        firstName: first,
        lastName: last,
      },
      type: "profile",
    },
  });
  await Promise.all([
    bulkSubscribe(email, env.KLAVIYO_WORK_WITH_US_LIST),
    bulkSubscribe(email, env.KLAVIYO_MAILING_LIST),
    createEvent(email, "Submitted work with us form on The Design Group", parsedInput),
  ]);
  if (body.data.id) return { success: true };
  throw new Error("Something went wrong");
});
