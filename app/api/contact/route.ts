import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

interface SendGridError extends Error {
  code?: number;
  response?: {
    headers?: unknown;
    body?: {
      errors?: Array<{
        message: string;
        field?: string;
        help?: string;
      }>;
    };
  };
}

export async function POST(req: Request) {
  try {
    console.log('Processing contact form submission...');

    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API key' },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL is missing from environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing contact email' },
        { status: 500 }
      );
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const { email, message } = await req.json();
    console.log('Received form data:', { email, message: message.substring(0, 50) + '...' });

    if (!email || !message) {
      console.error('Missing required fields:', { email: !!email, message: !!message });
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.CONTACT_EMAIL, // Must be verified sender in SendGrid
      subject: 'New Contact Form Submission - OpenFace',
      text: `From: ${email}\n\nMessage: ${message}`,
      html: `<strong>From:</strong> ${email}<br><br><strong>Message:</strong><br>${message}`,
    };

    console.log('Attempting to send email via SendGrid...', {
      to: msg.to,
      from: msg.from
    });
    
    await sgMail.send(msg);
    console.log('Email sent successfully');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact form submission:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      code: (error as SendGridError).code,
      details: error
    });

    // Type guard to check if it's a SendGrid error
    if (error instanceof Error && 'response' in error) {
      const sendGridError = error as SendGridError;
      console.error('SendGrid error details:', {
        code: sendGridError.code,
        errors: sendGridError.response?.body?.errors
      });
      
      // Return more specific error message
      const sgError = sendGridError.response?.body?.errors?.[0];
      if (sgError) {
        return NextResponse.json(
          { error: `SendGrid Error: ${sgError.message}`, details: sgError },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 