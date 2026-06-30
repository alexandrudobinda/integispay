import { NextResponse } from "next/server";

// Runs on the Node.js runtime, and must be dynamic (it posts to Slack).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Slack mrkdwn requires escaping these three characters.
function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    console.error("SLACK_WEBHOOK_URL is not set — cannot send contact notification.");
    return NextResponse.json(
      { error: "Notifications are not configured." },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const business = String(data.business ?? "").trim();
  const useCase = String(data.useCase ?? "").trim();
  const setup = String(data.setup ?? "").trim();
  const message = String(data.message ?? "").trim();
  const edition = data.edition === "saas" ? "saas" : "crypto";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and a message." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const fieldLabel = edition === "saas" ? "Billing model" : "Use case";

  const payload = {
    text: `New ${edition} enquiry from ${name} (${email})`,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: `📩 New ${edition} enquiry`, emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name:*\n${esc(name)}` },
          { type: "mrkdwn", text: `*Email:*\n${esc(email)}` },
          { type: "mrkdwn", text: `*Business:*\n${esc(business) || "—"}` },
          { type: "mrkdwn", text: `*${fieldLabel}:*\n${esc(useCase) || "—"}` },
          { type: "mrkdwn", text: `*Current setup:*\n${esc(setup) || "—"}` },
        ],
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*Message:*\n${esc(message)}` },
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `IntegisPay · ${edition} edition` }],
      },
    ],
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Slack webhook failed:", res.status, body);
      return NextResponse.json(
        { error: "Could not send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Slack webhook error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }
}
