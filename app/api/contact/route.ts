import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Runs on the Node.js runtime (SendGrid SDK), and must be dynamic (it sends mail).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "hello@integispay.com";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@integispay.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error("SENDGRID_API_KEY is not set — cannot send contact email.");
    return NextResponse.json(
      { error: "Email service is not configured." },
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
  const rows: [string, string][] = [
    ["Edition", edition],
    ["Name", name],
    ["Email", email],
    ["Business", business || "—"],
    [fieldLabel, useCase || "—"],
    ["Current setup", setup || "—"],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#182636;font-size:14px;line-height:1.6;">
      <h2 style="margin:0 0 16px;">New integration enquiry</h2>
      <table style="border-collapse:collapse;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#586780;">${esc(
                k
              )}</td><td style="padding:4px 0;font-weight:600;">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:16px 0 4px;color:#586780;">Message:</p>
      <p style="margin:0;white-space:pre-wrap;">${esc(message)}</p>
    </div>`;

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to: TO_EMAIL,
      from: { email: FROM_EMAIL, name: "IntegisPay Website" },
      replyTo: { email, name },
      subject: `New ${edition} enquiry — ${business || name}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const sgErr = err as { response?: { body?: unknown } };
    console.error("SendGrid send failed:", sgErr?.response?.body ?? err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }
}
