import type { Block } from "payload";

export const VideosCarousel: Block = {
  fields: [
    {
      fields: [
        {
          label: "Asset",
          name: "asset",
          relationTo: "mux-video",
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
      name: "videos",
      required: true,
      type: "array",
    },
  ],
  interfaceName: "VideosBlock",
  slug: "videos",
};

export default VideosCarousel;
