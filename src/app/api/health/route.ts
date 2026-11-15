import { NextResponse } from "next/server";
import { getDb, getDbPath } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const startTime = Date.now();
  try {
    const db = getDb();
    const result = db.pragma("quick_check") as { quick_check: string }[];
    const isDbOk = result.length > 0 && result[0].quick_check === "ok";
    const latencyMs = Date.now() - startTime;

    if (!isDbOk) {
      return NextResponse.json(
        {
          status: "degraded",
          database: "integrity_check_failed",
          dbPath: getDbPath(),
          latencyMs,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      status: "ok",
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      database: "healthy",
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
