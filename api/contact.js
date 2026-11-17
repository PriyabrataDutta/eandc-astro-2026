import { Resend } from "resend";


function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return req.body || {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res
      .status(500)
      .json({ success: false, error: "Email service is not configured" });
  }

  if (!process.env.CONTACT_FROM_EMAIL) {
    return res.status(500).json({
      success: false,
      error:
        "CONTACT_FROM_EMAIL must be set to a verified Resend sender address.",
    });
  }

  const body = getBody(req);

  if (clean(body.honeypot || body["form-anti-honeypot"]) !== "") {
    return res.status(200).json({ success: true });
  }

  const name = clean(body.name || body["contact-name"]);
  const email = clean(body.email || body["contact-email"]);
  const phone = clean(body.phone || body["contact-phone"]);
  const service = clean(body.service || body["contact-service"]);
  const message = clean(body.message || body["contact-message"]);

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Please fill Name, Email, and Message." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Please enter a valid email address." });
  }

  try {
    const html = `
      <h2>New Website Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>Area of Interest:</strong> ${escapeHtml(service || "-")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const attachments = [];
    if (body.file && body.file.data && body.file.name) {
      attachments.push({
        filename: body.file.name,
        content: Buffer.from(body.file.data, "base64"),
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: (process.env.CONTACT_TO_EMAIL || "sales@eandcpower.com").split(",").map(e => e.trim()),
      replyTo: email,
      subject: "New Website Enquiry",
      html,
      ...(attachments.length > 0 && { attachments }),
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error:
        error && error.message
          ? error.message
          : "Error sending mail. Please try again later.",
    });
  }
};
