import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
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
    
    // Server-side Validation
    const validatedData = contactSchema.parse(body);
    const browser = req.headers.get("user-agent") || "unknown";
    const submittedDate = new Date().toLocaleString();

    // 1. Send Inquiry to Admin
    const adminEmail = await resend.emails.send({
      from: "WEBZONO Inquiries <onboarding@resend.dev>", // Needs verified domain in production
      to: [CONTACT_EMAIL],
      subject: "New Project Inquiry - WEBZONO",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Full Name:</strong> ${validatedData.name}</p>
        <p><strong>Company Name:</strong> ${validatedData.company || "N/A"}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone Number:</strong> ${validatedData.phone}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Project Details:</strong></p>
        <p>${validatedData.description.replace(/\\n/g, "<br/>")}</p>
        <hr />
        <p><strong>Submitted Date & Time:</strong> ${submittedDate}</p>
        <p><strong>User IP:</strong> ${ip}</p>
        <p><strong>Browser:</strong> ${browser}</p>
      `,
    });

    if (adminEmail.error) {
      console.error("Admin Email Error:", adminEmail.error);
      return NextResponse.json({ error: "Failed to send inquiry." }, { status: 500 });
    }

    // 2. Send Auto-Reply to Client
    const clientEmail = await resend.emails.send({
      from: "WEBZONO Team <onboarding@resend.dev>", // Needs verified domain in production
      to: [validatedData.email],
      subject: "Thank you for contacting WEBZONO",
      text: `Thank you for contacting WEBZONO.\n\nWe have received your project inquiry successfully.\n\nOur team will review your requirements and contact you within 1–2 business hours.\n\nRegards,\nWEBZONO Team`,
    });

    if (clientEmail.error) {
      console.error("Client Email Error:", clientEmail.error);
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
