import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Fill in your name, email, and message." }, { status: 400 });
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: "portfolio@jalenmurray.com",
      to: process.env.CONTACT_EMAIL_TO ?? "",
      subject: `New message from ${body.name}`,
      text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Couldn't send that. Try again in a moment." }, { status: 500 });
  }
}
