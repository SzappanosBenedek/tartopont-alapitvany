const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Hiányzó kötelező mezők.' });
  }

  // Configure transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: `"TartóPont Alapítvány weboldal" <${process.env.SMTP_USER}>`,
    to: 'info@tartopontalapitvany.hu',
    replyTo: email,
    subject: `Új üzenet a honlapról: ${name}`,
    html: `
      <h2>Új kapcsolatfelvételi üzenet</h2>
      <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Név</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Telefonszám</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Üzenet</td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
      <p style="color: #666; font-size: 12px; margin-top: 16px;">Ez az üzenet a tartopontalapitvany.hu weboldalon keresztül érkezett.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Email küldési hiba.', details: error.message });
  }
}
