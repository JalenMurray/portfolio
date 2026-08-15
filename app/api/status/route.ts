import { NextResponse } from "next/server";
import { getStatus } from "@/lib/status";

// Public endpoint — only ever return sanitized data (no versions, paths, or internal IPs).
export async function GET() {
  const status = getStatus();
  return NextResponse.json(status);
}
