"use client";

import type { VideosBlock } from "@/payload-types";

import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/components/ui/carousel";
import { cn } from "@/shadcn/utils";
import MuxPlayer from "@mux/mux-player-react/lazy";
import ClassNames from "embla-carousel-class-names";
import { PauseCircle, PlayCircle } from "lucide-react";
import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

export function Video({
  current,
  hasInteraction,
  index,
  length,
  muxPlaybackId,
  setHasInteraction,
  title,
}: {
  current: number;
  hasInteraction: boolean;
  index: number;
  length: number;
  muxPlaybackId: string;
  setHasInteraction: Dispatch<SetStateAction<boolean>>;
  title: string;
}) {
  const [playing, setPlaying] = useState<boolean>(false);
  useEffect(() => {
    setPlaying(current === index);
  }, [current, index]);
  return (
    <>
      <MuxPlayer
        accentColor="#525a4a"
        className="musings cursor-pointer min-h-full scale-105 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        loop
        onPause={() => setPlaying(false)}
        onPlaying={() => {
          setPlaying(true);
          setHasInteraction(true);
        }}
        paused={!hasInteraction || current !== index || !playing}
        playbackId={muxPlaybackId}
        preload={current === index ? "auto" : "none"}
        style={{
          // aspectRatio: 16 / 9,
          fontSize: 0,
        }}
        theme="minimal"
        volume={0.7}
      />
      {current !== index && (
        <h3
          className={cn(
            "absolute bottom-0 pointer-events-none !w-1/3 text-left translate-y-[105%] left-1/2 right-auto text-lg top-10 font-serif tracking-widest uppercase",
            (current + 1 === index || (current === length - 1 && index === 0)) && "right-1/2 left-auto text-right",
            "lg:block hidden text-white",
          )}
        >
          {title}
        </h3>
      )}
      <div
        className={cn(
          "absolute top-1/2 pointer-events-none left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-base lg:text-lg tracking-wider transition-opacity delay-1000 duration-500 opacity-100",
          "flex flex-col items-center justify-center gap-4 lg:gap-12",
          playing && "opacity-0",
          (!playing || !hasInteraction) && "opacity-100",
        )}
      >
        <h3
          className={cn(
            current === index && "hidden uppercase md:block text-white w-full px-2 text-center !mb-0 font-serif",
            current !== index && "hidden",
          )}
        >
          {title}
        </h3>
        {!playing || !hasInteraction ? (
          <PlayCircle className="stroke-[0.5] stroke-white size-8 md:size-12" />
        ) : (
          <PauseCircle className="stroke-[0.5] stroke-white size-8 md:size-12" />
        )}
      </div>
    </>
  );
}

export default function VideosCarouselRenderer({ videos }: VideosBlock) {
  const [api, setApi] = useState<CarouselApi>();
  const [hasInteraction, setHasInteraction] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setHasInteraction(true);
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  if (!videos || videos.length === 0) return null;
  const length = videos?.length || 0;

  const videoMarkup = videos.map((video, index) => {
    if (!video.asset || typeof video.asset === "number" || !video.asset?.playbackOptions?.[0].playbackId) return null;
    const playbackId = video.asset?.playbackOptions?.[0].playbackId;
    return (
      <CarouselItem className="!pl-0 slide basis-1/2 relative" key={video.id}>
        <AspectRatio className="ratio flex items-center justify-center" ratio={1 / 1}>
          <AspectRatio className="flex items-center justify-center bg-foreground text-background" ratio={16 / 9}>
            <Image
              alt="Video thumbnail"
              className="w-full h-full object-cover object-center"
              height={450}
              src={`https://image.mux.com/${playbackId}/thumbnail.png?width=800&height=450&fit_mode=smartcrop&time=0`}
              width={800}
            />
            <Video
              current={current}
              hasInteraction={hasInteraction}
              index={index}
              length={length}
              muxPlaybackId={playbackId}
              setHasInteraction={setHasInteraction}
              title={video.title}
            />
          </AspectRatio>
        </AspectRatio>
      </CarouselItem>
    );
  });
  return (
    <div className="relative pb-10 flex items-stretch justify-center">
      <div className="min-h-full w-[91.66666666%] flex items-center justify-center">
        <Carousel
          className="px-2 w-full"
          opts={{ align: "center", inViewThreshold: 0.8, loop: true, startIndex: 1 }}
          plugins={[ClassNames()]}
          setApi={setApi}
        >
          <CarouselContent className="!ml-0 carousel-classnames next musings">{videoMarkup}</CarouselContent>
          <CarouselPrevious className="bg-transparent -left-6 md:-left-8 lg:-left-10 text-foreground border-transparent [&_svg]:size-10 [&_svg]:stroke-[0.5] rounded-none" />
          <CarouselNext className="bg-transparent -right-6 md:-right-8 lg:-right-10 text-foreground border-transparent [&_svg]:size-10 [&_svg]:stroke-[0.5] rounded-none" />
        </Carousel>
      </div>
    </div>
  );
}
