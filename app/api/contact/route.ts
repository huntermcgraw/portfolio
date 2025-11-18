import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      // "onboarding@resend.dev" is the free testing domain. 
      // It works perfectly for sending emails TO yourself.
      from: 'Portfolio Contact <onboarding@resend.dev>',
      
      // Send it to yourself
      to: [process.env.MY_EMAIL as string], 
      
      // Critical: Set "Reply-To" to the user's email.
      // This ensures that when you hit "Reply" in your inbox, 
      // it goes to the user, not the "onboarding" address.
      replyTo: email,
      
      subject: `New Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}