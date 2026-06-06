import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// It will gracefully fail if not provided, allowing local development to continue
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, email, phone, serviceRequired, budget, message } = body;

    // Construct the email content
    const htmlContent = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6A00FF;">New Lead from Webzono Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p><strong>Service Required:</strong> ${serviceRequired}</p>
        <p><strong>Estimated Budget:</strong> ${budget}</p>
        <p><strong>Project Details:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br />')}
        </div>
      </div>
    `;

    // If Resend is configured, send the email
    if (resend) {
      const { error } = await resend.emails.send({
        from: 'Webzono Leads <onboarding@resend.dev>', // Update this to your verified domain later (e.g., leads@webzono.com)
        to: ['webzono.official@gmail.com'],
        subject: `New Lead: ${name} from ${businessName}`,
        html: htmlContent,
      });

      if (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ error: 'Failed to send email through provider.' }, { status: 500 });
      }
    } else {
      // For local development or missing API key, just log the email contents
      console.log('--- EMAIL CAPTURED (No Resend API Key) ---');
      console.log(htmlContent);
      console.log('------------------------------------------');
    }

    return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Contact Form API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
