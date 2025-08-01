import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    if (error.response && error.response.body && error.response.body.errors) {
      console.error('SendGrid error details:', error.response.body.errors);
    }
    return false;
  }
}

export function createContactEmailHtml(name: string, email: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
        .footer { background: #6c757d; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #495057; }
        .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #dee2e6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>📧 Nuevo mensaje desde tu portafolio</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nombre:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Este mensaje fue enviado desde tu portafolio web</p>
        </div>
      </div>
    </body>
    </html>
  `;
}