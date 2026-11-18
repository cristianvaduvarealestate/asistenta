// @ts-ignore: generated at build time by opennextjs-cloudflare
import { default as openNextHandler } from "../.open-next/worker.js";
// @ts-ignore: optional durable objects exported by opennext
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "../.open-next/worker.js";
import { processDueJobs } from "./lib/jobs";

const worker = {
  // Pass-through standard Next.js requests to OpenNext handler
  fetch: (request: Request, env: any, ctx: any) => {
    return openNextHandler.fetch(request, env, ctx);
  },

  // Internal scheduled handler for Cloudflare Cron Triggers
  async scheduled(controller: any, env: any, ctx: any) {
    const doWork = async () => {
      try {
        const cron = controller?.cron || "cron_trigger";
        console.log(`[Cron] Scheduled tick triggered (cron: ${cron})`);
        const res = await processDueJobs(50, env?.DB);
        console.log(`[Cron] Scheduled tick completed:`, JSON.stringify(res));
      } catch (err) {
        console.error(`[Cron] Scheduled tick error:`, err);
      }
    };

    if (ctx && typeof ctx.waitUntil === "function") {
      ctx.waitUntil(doWork());
    } else {
      await doWork();
    }
  },
};

export default worker;
