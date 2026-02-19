import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  subject: z.string().trim().min(2, "Please enter a subject."),
  message: z.string().trim().min(10, "Please enter a longer message."),
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  const to = process.env.CONTACT_TO_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Always succeed (so the form is "working") even if email delivery isn't configured.
  // In production, set RESEND_API_KEY + CONTACT_TO_EMAIL (+ CONTACT_FROM_EMAIL recommended).
  if (!to || !resendKey || !from) {
    console.log("[contact] received message (email delivery not configured)", {
      name,
      email,
      subject,
      messagePreview: message.slice(0, 120),
    });

    return NextResponse.json({ ok: true, delivered: false }, { status: 200 });
  }

  const resend = new Resend(resendKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
          <h2 style="margin: 0 0 12px;">New portfolio message</h2>
          <p style="margin: 0 0 6px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 14px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <pre style="white-space: pre-wrap; margin: 0; padding: 12px; background: #0b1220; color: #e2e8f0; border-radius: 12px;">${escapeHtml(
            message,
          )}</pre>
          <p style="margin: 14px 0 0; color: #64748b;">Sent from ${escapeHtml(
            siteConfig.name,
          )}'s portfolio contact form.</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[contact] resend failed", err);
    return NextResponse.json(
      { error: "Message received but delivery failed. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true }, { status: 200 });
}

