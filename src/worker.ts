// @ts-ignore: generated at build time by opennextjs-cloudflare
import { default as openNextHandler } from "../.open-next/worker.js";
// @ts-ignore: optional durable objects exported by opennext
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "../.open-next/worker.js";
import { processDueJobs } from "./lib/jobs";

const worker = {
  // Pass-through standard Next.js requests to OpenNext handler with enforced Security Headers
  fetch: async (request: Request, env: any, ctx: any) => {
    const response = await openNextHandler.fetch(request, env, ctx);

    // Clone headers to safely add security headers
    const headers = new Headers(response.headers);

    // Enforce HTTP Security Headers on Cloudflare Edge responses
    headers.set("Strict-Transport-Security", "max-age=31536000");
    headers.set("X-Frame-Options", "DENY");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
    );

    // Ensure Content-Security-Policy with cryptographic nonce is present
    if (!headers.has("Content-Security-Policy")) {
      const nonceBytes = new Uint8Array(16);
      crypto.getRandomValues(nonceBytes);
      let binary = "";
      for (let i = 0; i < nonceBytes.length; i++) {
        binary += String.fromCharCode(nonceBytes[i]);
      }
      const nonce = btoa(binary);

      headers.set(
        "Content-Security-Policy",
        `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'strict-dynamic'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://images.unsplash.com; font-src 'self' data:; connect-src 'self' https://api.telegram.org; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;`
          .replace(/\s{2,}/g, " ")
          .trim()
      );
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
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
