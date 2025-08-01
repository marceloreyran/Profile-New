import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

// Debug: Log the API key format (first few characters only for security)
console.log('SendGrid API Key format check:', process.env.SENDGRID_API_KEY?.substring(0, 3) + '...');

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

export function createContactEmailHtml(name: string, email: string, subject: string, message: string): string {
  const currentDate = new Date().toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f5f5f5;
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #3B82F6, #1E40AF); 
          color: white; 
          padding: 30px 20px; 
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content { 
          padding: 30px 20px; 
        }
        .field { 
          margin-bottom: 20px; 
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        .field:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .label { 
          font-weight: 600; 
          color: #374151; 
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .value { 
          background: #f9fafb; 
          padding: 15px; 
          border-radius: 8px; 
          border-left: 4px solid #3B82F6;
          font-size: 16px;
        }
        .footer { 
          background: #f9fafb; 
          color: #6b7280; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px;
          border-top: 1px solid #e5e7eb;
        }
        .timestamp {
          color: #6b7280;
          font-size: 12px;
          margin-top: 10px;
        }
        .reply-button {
          display: inline-block;
          background: #3B82F6;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 15px;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Nuevo mensaje de contacto</h1>
          <div class="timestamp">Recibido el ${currentDate}</div>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nombre del contacto:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email de respuesta:</div>
            <div class="value">
              <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
            </div>
          </div>
          <div class="field">
            <div class="label">Asunto:</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}?subject=Re: ${subject}" class="reply-button">
              Responder mensaje
            </a>
          </div>
        </div>
        <div class="footer">
          <p>Este mensaje fue enviado desde tu portafolio web profesional</p>
          <p>Portfolio: <strong>Marcelo Rey - Frontend Developer</strong></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function createAutoReplyHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gracias por tu mensaje</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f5f5f5;
        }
        .container { 
          max-width: 500px; 
          margin: 20px auto; 
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #10B981, #047857); 
          color: white; 
          padding: 30px 20px; 
          text-align: center;
        }
        .content { 
          padding: 30px 20px; 
          text-align: center;
        }
        .footer { 
          background: #f9fafb; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px;
          color: #6b7280;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Mensaje recibido</h1>
        </div>
        <div class="content">
          <h2>¡Hola ${name}!</h2>
          <p>Gracias por contactarme a través de mi portafolio. He recibido tu mensaje y te responderé lo antes posible.</p>
          <p>Generalmente respondo en un plazo de 24 horas.</p>
        </div>
        <div class="footer">
          <p><strong>Marcelo Rey</strong> - Frontend Developer</p>
        </div>
      </div>
    </body>
    </html>
  `;
}