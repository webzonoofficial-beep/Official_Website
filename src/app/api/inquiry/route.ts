import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, budget, message } = body;

    const htmlContent = `
      <div style="font-family: sans-serif; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 25px; border-radius: 12px; background-color: #fff;">
        <h2 style="color: #D4AF37; margin-bottom: 20px; font-weight: bold; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Client Inquiry from WEBZONO</h2>
        <p><strong>Name:</strong> ${name || "Anonymous Client"}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email || "not-provided@webzono.in"}</a></p>
        <p><strong>Company/Brand:</strong> ${company || "Not Specified"}</p>
        <p><strong>Selected Budget:</strong> <span style="background-color: #f7f7f7; padding: 3px 8px; border-radius: 4px; font-weight: bold; color: #D4AF37;">${budget || "Not Specified"}</span></p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
        <p><strong>Message / Project Details:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #D4AF37; font-style: italic; white-space: pre-wrap;">
          ${message || "No message details provided."}
        </div>
        <div style="margin-top: 30px; font-size: 11px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
          This inquiry was sent automatically from the WEBZONO website client portal.
        </div>
      </div>
    `;

    if (resend) {
      const { error } = await resend.emails.send({
        from: 'WEBZONO Portal <onboarding@resend.dev>',
        to: ['webzono.official@gmail.com'],
        subject: `[WEBZONO Lead] ${name || "New Inquiry"} from ${company || "Startup"}`,
        html: htmlContent,
      });

      if (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ error: 'Failed to send email through provider.' }, { status: 500 });
      }
    } else {
      console.log('--- EMAIL CAPTURED (No Resend API Key Configured) ---');
      console.log(htmlContent);
      console.log('----------------------------------------------------');
    }

    return NextResponse.json({ success: true, message: 'Inquiry received successfully!' }, { status: 200 });

  } catch (error: any) {
    console.error('Inquiry Form API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
