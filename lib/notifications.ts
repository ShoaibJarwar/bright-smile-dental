import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

/** Send email via EmailJS directly from browser */
async function sendEmail(params: {
  subject: string;
  message: string;
}): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      subject: params.subject,
      message: params.message,
    },
    PUBLIC_KEY
  );
}

/** Send WhatsApp via Twilio through API route */
async function sendWhatsApp(message: string): Promise<void> {
  const res = await fetch("/api/whatsapp", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ message }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.error ?? "WhatsApp failed");
  }
}

/** Fire both simultaneously — if one fails the other still sends */
export async function notifyAll(params: {
  subject:      string;
  emailMessage: string;
  waMessage:    string;
}): Promise<void> {
  const results = await Promise.allSettled([
    sendEmail({
      subject: params.subject,
      message: params.emailMessage,
    }),
    sendWhatsApp(params.waMessage),
  ]);

  const emailFailed = results[0].status === "rejected";
  const waFailed    = results[1].status === "rejected";

  if (emailFailed) console.error("Email failed:", (results[0] as PromiseRejectedResult).reason);
  if (waFailed)    console.error("WhatsApp failed:", (results[1] as PromiseRejectedResult).reason);

  // Only throw if BOTH failed
  if (emailFailed && waFailed) {
    throw new Error("Both email and WhatsApp notifications failed");
  }
}

/** Build a plain-text email body from key-value rows */
export function buildEmailMessage(
  title: string,
  rows:  { label: string; value: string }[]
): string {
  const divider = "─".repeat(40);
  return [
    title,
    divider,
    ...rows.map((r) => `${r.label}: ${r.value}`),
    divider,
    "Sent from Bright Smile Dental Clinic website",
  ].join("\n");
}

/** Build WhatsApp message from key-value rows */
export function buildWhatsAppMessage(
  title: string,
  rows:  { label: string; value: string }[]
): string {
  return [
    `🦷 *${title}*`,
    "",
    ...rows.map((r) => `*${r.label}:* ${r.value}`),
    "",
    "_Bright Smile Dental Clinic_",
  ].join("\n");
}