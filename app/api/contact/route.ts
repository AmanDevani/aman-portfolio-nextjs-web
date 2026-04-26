import env from "@/env";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD,
      },
    });

    // Email to you (original functionality)
    const mailOptionsToYou = {
      from: env.EMAIL_USER,
      to: "amandevani25@gmail.com",
      subject: `Aman Devani | New message from ${name}`,
      text: message,
      html: `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Form Submission</title>
    <style>
      body {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif;
        background-color: #f4f4f5;
        margin: 0;
        padding: 20px;
      }

      .card {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border: 1px solid #e4e4e7;
        border-radius: 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      .card-header {
        background: #2563eb;
        color: white;
        font-weight: 600;
        font-size: 18px;
        padding: 16px 20px;
      }

      .card-content {
        padding: 24px;
        color: #111827;
      }

      .field {
        margin-bottom: 16px;
      }

      .label {
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        margin-bottom: 4px;
        display: block;
      }

      .value {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        padding: 10px 12px;
        border-radius: 8px;
        font-size: 14px;
        color: #111827;
      }

      .footer {
        text-align: center;
        font-size: 12px;
        color: #6b7280;
        padding: 16px;
        border-top: 1px solid #e4e4e7;
        background: #fafafa;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="card-header">📩 New Contact Message</div>
      <div class="card-content">
        <p>You've received a new message from your website contact form:</p>

        <div class="field">
          <span class="label">Name</span>
          <div class="value">${name}</div>
        </div>

        <div class="field">
          <span class="label">Email</span>
          <div class="value">${email}</div>
        </div>

        <div class="field">
          <span class="label">Message</span>
          <div class="value">${message}</div>
        </div>
      </div>
      <div class="footer">
        This message was sent from your website contact form.
      </div>
    </div>
  </body>
</html>

      `,
    };

    // Confirmation email to user
    // const mailOptionsToUser = {
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "Thank you for contacting Haque.",
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #333;">Thank you for reaching out!</h2>
    //       <p>Dear ${name},</p>
    //       <p>I have received your message and will get back to you as soon as possible. Thank you for your interest in my work.</p>

    //       <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
    //         <h4 style="margin: 0 0 10px 0; color: #333;">Your message:</h4>
    //         <p style="margin: 0; color: #666;">${message}</p>
    //       </div>

    //       <p>Best regards,<br>
    //       <strong>Haque.</strong></p>

    //       <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
    //       <p style="font-size: 12px; color: #888;">This is an automated confirmation email. Please do not reply to this email.</p>
    //     </div>
    //   `,
    // };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      // reply email to the user
      // transporter.sendMail(mailOptionsToUser),
    ]);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
