import { NextResponse } from "next/server";
import { getCowboysStatus } from "@/lib/cowboys";

export async function GET() {
  const status = await getCowboysStatus();
  return NextResponse.json(status);
}
