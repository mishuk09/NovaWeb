import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  name?: string;
  mail?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request
    .json()
    .catch(() => null)) as ContactRequestBody | null;

  if (!body) {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const mail = body.mail?.trim();
  const message = body.message?.trim();
  const phone = body.phone?.trim();
  const service = body.service?.trim();

  if (!name || !mail || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing email configuration. Set EMAIL_USER and EMAIL_PASS.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const subject = `New ${service || "website inquiry"} request from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${mail}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#172033;line-height:1.6">
      <div style="background:#172033;color:#fff;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="margin:0">New contact request</h2>
        <p style="margin:8px 0 0;color:#cbd5e1">From novanest.my</p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:0;padding:24px;border-radius:0 0 8px 8px">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(mail)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: mail,
      to: "support@novanest.my",
      subject,
      text,
      html,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to send your message right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks, your message has been sent to novanest support.",
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
