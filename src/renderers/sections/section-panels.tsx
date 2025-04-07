import type { PanelsBlock } from "@/payload-types";

import { S3Image } from "@/components/s3-image";
import "react-medium-image-zoom/dist/styles.css";
import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { RichText } from "@payloadcms/richtext-lexical/react";
import "react-medium-image-zoom/dist/styles.css";
import { useId } from "react";
import Zoom from "react-medium-image-zoom";

export function SectionPanelsRenderer({ panels }: PanelsBlock) {
  const id = useId();
  return (
    <section className="py-10 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-16 md:gap-32">
        {panels.map((p) => {
          return (
            <div className="flex flex-col gap-16 flex-1 basis-full md:basis-1/3" key={`${p.id} ${id}`}>
              <AspectRatio className="w-full bg-black text-white" ratio={16 / 9}>
                {p.asset && typeof p.asset !== "number" && p.asset.url && (
                  <Zoom classDialog="bg-white">
                    <S3Image
                      image={p.asset}
                      imageProps={{
                        alt: p.asset.alternativeText,
                        className: "object-cover w-full h-full",
                        fill: true,
                        sizes: "(max-width: 768px) 120vw, 60vw",
                        src: p.asset.url!,
                        style: {
                          objectPosition: `${p.asset.focalX ?? 50}% ${p.asset.focalY ?? 50}%`,
                        },
                      }}
                    />
                  </Zoom>
                )}
              </AspectRatio>
              <RichText className="richtext flex flex-col gap-8" data={p.content} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
