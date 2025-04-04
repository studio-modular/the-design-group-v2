import type { GlobalConfig } from "payload";

import { revalidateTag } from "next/cache";

export const Work: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Title",
      name: "title",
      required: true,
      type: "text",
    },
    {
      label: "Header Asset",
      name: "asset",
      relationTo: ["images", "mux-video"],
      type: "relationship",
    },
    {
      label: "Header Copy",
      name: "headerCopy",
      type: "richText",
    },
    {
      label: "Copy before Form",
      name: "beforeCopy",
      type: "richText",
    },
  ],
  hooks: {
    afterChange: [
      async function handleWorkChange() {
        revalidateTag("work");
      },
    ],
  },
  slug: "work",
};
