import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
console.log('Initializing SendGrid...');
console.log('API Key exists:', !!process.env.SENDGRID_API_KEY);
console.log('From Email exists:', !!process.env.EMAIL_FROM);
console.log('To Email exists:', !!process.env.EMAIL_TO);

if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not defined');
    throw new Error('SENDGRID_API_KEY is required');
}

try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('SendGrid initialized successfully');
} catch (error) {
    console.error('Failed to initialize SendGrid:', error);
    throw error;
}

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const msg = {
      to: to || process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject,
      text,
      html,
    };

    console.log('Attempting to send email with config:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject
    });

    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      response: error.response?.body,
      code: error.code,
      stack: error.stack
    });
    
    if (error.response?.body?.errors) {
      console.error('SendGrid API errors:', error.response.body.errors);
    }
    
    return { success: false, error: error.message };
  }
}; 