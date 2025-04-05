import Mux from "@mux/mux-node";
import { Asset } from "@mux/mux-node/resources/video/assets.mjs";
import { PayloadHandler } from "payload";

export const getAssetMetadata = (asset: Asset) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-asserted-optional-chain
  const videoTrack = asset.tracks?.find((track: any) => track.type === "video")!;

  return {
    /* Reformat Mux's aspect ratio (e.g. 16:9) to be CSS-friendly (e.g. 16/9) */
    aspectRatio: asset.aspect_ratio!.replace(":", "/"),
    duration: asset.duration,
    playbackOptions: asset.playback_ids?.map((value) => ({
      playbackId: value.id,
      playbackPolicy: value.policy as unknown as "public",
    })),
    ...(videoTrack
      ? {
          maxHeight: videoTrack.max_height,
          maxWidth: videoTrack.max_width,
        }
      : {}),
  };
};
export const muxWebhooksHandler =
  (mux: Mux): PayloadHandler =>
  async (req) => {
    if (!req.json) return Response.error();
    const body = await req.json();
    if (!body) return Response.error();
    mux.webhooks.verifySignature(JSON.stringify(body), req.headers);
    const event = body;
    if (event.type === "video.asset.ready" || event.type === "video.asset.deleted") {
      try {
        const assetId = event.object.id;
        const videos = await req.payload.find({
          collection: "mux-video",
          limit: 1,
          pagination: false,
          where: {
            assetId: {
              equals: assetId,
            },
          },
        });
        if (videos.totalDocs === 0) {
          return new Response("Success!", {
            status: 200,
          });
        }
        const video = videos.docs[0];
        if (event.type === "video.asset.ready") {
          await req.payload.update({
            collection: "mux-video",
            data: {
              ...getAssetMetadata(event.data),
            },
            id: video.id,
          });
        } else if (event.type === "video.asset.deleted") {
          await req.payload.delete({
            collection: "mux-video",
            id: video.id,
          });
        }
      } catch (err: unknown) {
        console.error(err);
        return new Response("Error", {
          status: 204,
        });
      }
    } else if (event.type === "video.asset.errored") {
      if (event.data?.errors) {
        console.error(`Error with assetId: ${event.object.id}, logging error and returning 204...`);
        console.error(JSON.stringify(event.data.errors, null, 2));
      }
    }
    return new Response("Success!", {
      status: 200,
    });
  };
