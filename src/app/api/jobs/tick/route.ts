import { NextRequest, NextResponse } from "next/server";
import { processDueJobs } from "@/lib/jobs";
import { timingSafeEqualUtf8 } from "@/lib/session-helpers";

export async function POST(req: NextRequest) {
  const secret = process.env.JOBS_SECRET?.trim();
  const provided = req.headers.get("x-jobs-secret") || "";
  if (!secret || secret.length < 16 || !timingSafeEqualUtf8(provided, secret)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const result = await processDueJobs(50);
  return NextResponse.json({ ok: true, ...result });
}
