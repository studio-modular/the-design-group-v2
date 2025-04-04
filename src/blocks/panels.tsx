import type { Block } from "payload";

export const Panels: Block = {
  fields: [
    {
      fields: [
        {
          label: "Asset",
          name: "asset",
          relationTo: ["images", "mux-video"],
          required: true,
          type: "relationship",
        },
        {
          label: "Content",
          name: "content",
          required: true,
          type: "richText",
        },
      ],
      label: "Panels",
      minRows: 1,
      name: "Panels",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "PanelsBlock",
  slug: "panels",
};

export default Panels;
