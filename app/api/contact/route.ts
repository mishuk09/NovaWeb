import { NextResponse } from "next/server";
import {
  AccountApiFactory,
  Configuration,
  SendApiFactory,
} from "hostinger-mail-api-sdk";
import { siteConfig } from "@/config/site";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequestBody | null;

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const phone = body.phone?.trim();
  const service = body.service?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const accessToken = process.env.HOSTINGER_MAIL_API_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      {
        error:
          "Missing Hostinger mail configuration. Set HOSTINGER_MAIL_API_TOKEN.",
      },
      { status: 500 },
    );
  }

  const configuration = new Configuration({ accessToken });
  const accountClient = AccountApiFactory(configuration);
  const mailClient = SendApiFactory(configuration);

  const account = await accountClient.getCurrentAccount();
  const mailbox =
    account.data.data.mailboxes.find(
      (item) => item.address.toLowerCase() === siteConfig.contact.email.toLowerCase(),
    ) ?? account.data.data.mailboxes[0];

  if (!mailbox) {
    return NextResponse.json(
      {
        error:
          "No managed mailbox was found for the authenticated Hostinger token.",
      },
      { status: 500 },
    );
  }

  const subject = `New contact request from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  await mailClient.sendEmail(mailbox.resourceId, {
    to: [siteConfig.contact.email],
    displayName: mailbox.address,
    cc: [],
    bcc: [],
    subject,
    text,
    html,
    attachments: [],
  });

  return NextResponse.json({
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