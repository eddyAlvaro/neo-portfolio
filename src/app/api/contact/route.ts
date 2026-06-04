import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return Response.json({ success: false }, { status: 400 });

  const { name, email, subject, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ success: false }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ success: false }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ success: false }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Neo Portfolio <onboarding@resend.dev>",
    to: ["e.alvaro.arenas@gmail.com"],
    replyTo: email,
    subject: `[Portfolio] ${subject?.trim() || "New transmission"}`,
    text: `${name} <${email}>\n\n${message}`,
  });

  if (error) return Response.json({ success: false }, { status: 500 });
  return Response.json({ success: true });
}
