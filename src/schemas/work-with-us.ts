import parsePhoneNumber from "libphonenumber-js";
import { parseFullName } from "parse-full-name";
import { z } from "zod";

export const WorkWithUsSchema = z.strictObject({
  email: z.string().email({ message: "Please add your email" }),
  link: z.string().url().min(1),
  message: z.string().trim().min(1),
  name: z.preprocess(
    (val) => {
      const { error, first, last } = parseFullName(val as string);
      if (error && error.length > 0) return undefined;
      if (!first || !last) return undefined;
      return `${first} ${last}`;
    },
    z.string({
      message: "Please add your first and last name",
    }),
  ),
  phoneNumber: z.preprocess(
    (val) => {
      if (!val || (typeof val === "string" && val.trim() === "")) return null;
      const phone = parsePhoneNumber(val as string);
      if (!phone?.isValid()) return undefined;
      return phone.formatInternational().replaceAll(" ", "");
    },
    z.string({
      message: "Please add your phone number (with country code)",
    }),
  ),
  preferredMethodOfContact: z.enum(["phone", "email", "email-or-phone"]),
});

export type WorkWithUsSchemaType = z.infer<typeof WorkWithUsSchema>;
