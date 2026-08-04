import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "webzono.official@gmail.com";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50),
  company: z.string().max(50).optional(),
  email: z.string().email("Invalid email address").max(80),
  phone: z.string().min(5).max(20),
  projectType: z.string(),
  budget: z.string(),
  description: z.string().min(20, "Description is too short").max(1000),
});

// Simple in-memory rate limiting (Note: resets on serverless cold starts)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    const missingVars = [];
    if (!emailUser) missingVars.push("EMAIL_USER");
    if (!emailPass) missingVars.push("EMAIL_PASS");

    let transporter;

    if (missingVars.length > 0) {
      console.error(`Email configuration error. Missing environment variables: ${missingVars.join(", ")}`);
      console.warn("Falling back to Ethereal Email (mock SMTP service) for testing.");
      
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });
    }
    
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    // Rate Limiting Logic
    const now = Date.now();
    const userRate = rateLimit.get(ip);
    
    if (userRate) {
      if (now - userRate.timestamp < RATE_LIMIT_WINDOW) {
        if (userRate.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        userRate.count++;
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();
    console.log("[1/5] Request received:", JSON.stringify(body, null, 2));

    // Server-side Validation
    const validatedData = contactSchema.parse(body);
    const browser = req.headers.get("user-agent") || "unknown";
    const submittedDate = new Date().toLocaleString();
    
    console.log("[2/5] Email service initialized successfully.");

    // 1. Send Inquiry to Admin
    try {
      console.log("[3/5] Sending email to admin...");
      const adminInfo = await transporter.sendMail({
        from: `"WEBZONO Inquiries" <${emailUser || 'test@ethereal.email'}>`,
        to: "webzono.official@gmail.com",
        replyTo: validatedData.email,
        subject: "New Website Inquiry - WEBZONO",
        html: `
          <h2>New Website Inquiry - WEBZONO</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Company:</strong> ${validatedData.company || "N/A"}</p>
          <p><strong>Service:</strong> ${validatedData.projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.description.replace(/\n/g, "<br/>")}</p>
          <hr />
          <p><strong>Date & Time:</strong> ${submittedDate}</p>
        `,
      });
      
      console.log("[4/5] Email sent successfully (Admin).");
      console.log("[5/5] Email provider response:", adminInfo.response);

      if (missingVars.length > 0) {
        console.log("⚠️ NO REAL CREDENTIALS FOUND. Email intercepted by Ethereal. Preview URL: %s", nodemailer.getTestMessageUrl(adminInfo));
      }
    } catch (adminError: any) {
      console.error("❌ Admin Email Error Details:", adminError);
      return NextResponse.json(
        { error: `Failed to send email: ${adminError.message || 'SMTP Error'}` },
        { status: 500 }
      );
    }

    // 2. Send Auto-Reply to Client
    try {
      console.log("[3/5] Sending auto-reply to client...");
      const clientInfo = await transporter.sendMail({
        from: `"WEBZONO Team" <${emailUser || 'test@ethereal.email'}>`,
        to: validatedData.email,
        subject: "Thank you for contacting WEBZONO",
        text: `Thank you for contacting WEBZONO.\n\nWe have received your project inquiry successfully.\n\nOur team will review your requirements and contact you within 1–2 business hours.\n\nRegards,\nWEBZONO Team`,
      });
      
      console.log("[4/5] Auto-reply sent successfully (Client).");
      console.log("[5/5] Email provider response:", clientInfo.response);
      
      if (missingVars.length > 0) {
        console.log("⚠️ NO REAL CREDENTIALS FOUND. Auto-reply intercepted by Ethereal. Preview URL: %s", nodemailer.getTestMessageUrl(clientInfo));
      }
    } catch (clientError) {
      console.error("❌ Client Email Error:", clientError);
      // We still return success since the admin got the email, but log the error
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Contact API Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
