import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/email';

// Comment out SendGrid initialization
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function GET() {
    try {
        // Log environment variables (without exposing sensitive data)
        console.log('Environment check:', {
            hasApiKey: !!process.env.SENDGRID_API_KEY,
            apiKeyLength: process.env.SENDGRID_API_KEY?.length,
            fromEmail: process.env.EMAIL_FROM,
            toEmail: process.env.EMAIL_TO
        });

        // Comment out email sending code
        // const msg = {
        //   to: process.env.TO_EMAIL,
        //   from: process.env.FROM_EMAIL,
        //   subject: 'Test Email',
        //   text: 'This is a test email.',
        //   html: '<p>This is a test email.</p>',
        // };
        // await sgMail.send(msg);

        // Comment out test email sending
        // const emailResponse = await sendEmail({
        //     subject: 'Test Email from Your Application',
        //     text: `
        //         This is a test email from your application.
        //         If you're seeing this, your email configuration is working correctly!
        //         
        //         Time sent: ${new Date().toLocaleString()}
        //     `,
        //     html: `
        //         <h1>Test Email</h1>
        //         <p>This is a test email from your application.</p>
        //         <p>If you're seeing this, your email configuration is working correctly!</p>
        //         <p><strong>Time sent:</strong> ${new Date().toLocaleString()}</p>
        //     `
        // });

        // if (!emailResponse.success) {
        //     console.error('Email sending failed:', {
        //         error: emailResponse.error,
        //         details: emailResponse.error?.response?.body || 'No additional details available'
        //     });
        //     return NextResponse.json({
        //         success: false,
        //         error: emailResponse.error,
        //         details: emailResponse.error?.response?.body || 'No additional details available',
        //         environment: {
        //             hasApiKey: !!process.env.SENDGRID_API_KEY,
        //             apiKeyLength: process.env.SENDGRID_API_KEY?.length,
        //             fromEmail: process.env.EMAIL_FROM,
        //             toEmail: process.env.EMAIL_TO
        //         }
        //     }, { status: 500 });
        // }

        // Return a mock success response
        return NextResponse.json({
            success: true,
            message: 'Test email (mock) sent successfully',
            environment: {
                hasApiKey: !!process.env.SENDGRID_API_KEY,
                apiKeyLength: process.env.SENDGRID_API_KEY?.length,
                fromEmail: process.env.EMAIL_FROM,
                toEmail: process.env.EMAIL_TO
            }
        });
    } catch (error) {
        console.error('Error in test email API:', error);
        return NextResponse.json({
            success: false,
            error: error.message,
            stack: error.stack,
            environment: {
                hasApiKey: !!process.env.SENDGRID_API_KEY,
                apiKeyLength: process.env.SENDGRID_API_KEY?.length,
                fromEmail: process.env.EMAIL_FROM,
                toEmail: process.env.EMAIL_TO
            }
        }, { status: 500 });
    }
} 