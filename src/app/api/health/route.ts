import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const startTime = Date.now();
  try {
    const db = getDb();
    const check = await db.prepare("SELECT 1 AS ok").first<{ ok: number }>();
    const isDbOk = check?.ok === 1;
    const latencyMs = Date.now() - startTime;

    if (!isDbOk) {
      return NextResponse.json(
        {
          status: "degraded",
          database: "integrity_check_failed",
          latencyMs,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      database: "healthy (D1)",
      latencyMs,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "error",
        error: err instanceof Error ? err.message : "Database unavailable",
        latencyMs: Date.now() - startTime,
      },
      { status: 500 }
    );
  }
}
