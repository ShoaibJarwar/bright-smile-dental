import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to:   process.env.OWNER_WHATSAPP!,
      body: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Twilio error:", err);
    return NextResponse.json(
      { error: "WhatsApp notification failed" },
      { status: 500 }
    );
  }
}