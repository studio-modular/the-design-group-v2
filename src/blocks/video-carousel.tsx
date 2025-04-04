import type { Block } from "payload";

export const VideosCarousel: Block = {
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
          label: "Title",
          name: "title",
          required: true,
          type: "text",
        },
      ],
      label: "Videos",
      minRows: 3,
      name: "Videos",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "VideosBlock",
  slug: "videos",
};

export default VideosCarousel;
