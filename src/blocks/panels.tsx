import type { Block } from "payload";

export const Panels: Block = {
  fields: [
    {
      fields: [
        {
          label: "Asset",
          name: "asset",
          relationTo: "images",
          required: false,
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
      name: "panels",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "PanelsBlock",
  slug: "panels",
};

export default Panels;
