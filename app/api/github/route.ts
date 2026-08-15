import { NextResponse } from "next/server";
import { getRecentActivity, GITHUB_USERNAME } from "@/lib/github";

export async function GET() {
  const activity = await getRecentActivity(GITHUB_USERNAME);
  return NextResponse.json({ activity });
}
