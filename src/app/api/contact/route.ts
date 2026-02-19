import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  subject: z.string().trim().min(2, "Please enter a subject."),
  message: z.string().trim().min(10, "Please enter a longer message."),
});

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.log("[contact] received message (Web3Forms not configured)", {
      name,
      email,
      subject,
      messagePreview: message.slice(0, 120),
    });
    return NextResponse.json({ ok: true, delivered: false }, { status: 200 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio] ${subject}`,
        message,
        from_name: "Portfolio Contact Form",
      }),
    });

    const data = await res.json();

    if (!data.success) {
      console.error("[contact] Web3Forms error", data);
      return NextResponse.json(
        { error: "Message received but delivery failed. Please try again later." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Web3Forms fetch failed", err);
    return NextResponse.json(
      { error: "Message received but delivery failed. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true }, { status: 200 });
}
