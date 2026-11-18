import { NextRequest, NextResponse } from "next/server";
import { processDueJobs } from "@/lib/jobs";
import { timingSafeEqualUtf8 } from "@/lib/session-helpers";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

function getJobsSecret(): string | undefined {
  let s = process.env.JOBS_SECRET?.trim();
  if (!s) {
    try {
      const ctx = getCloudflareContext();
      s = (ctx?.env as any)?.JOBS_SECRET?.trim();
    } catch {}
  }
  return s;
}

export async function POST(req: NextRequest) {
  const secret = getJobsSecret();
  const provided = req.headers.get("x-jobs-secret") || "";
  if (!secret || secret.length < 16 || !timingSafeEqualUtf8(provided, secret)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const result = await processDueJobs(50);
  return NextResponse.json({ ok: true, ...result });
}
