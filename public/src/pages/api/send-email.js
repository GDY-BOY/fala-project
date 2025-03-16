import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, link } = req.body;

  try {
    await resend.emails.send({
      from: 'your-email@example.com', // Replace with your verified Resend email
      to: email,
      subject: 'Your Custom Video Link',
      html: `<p>Here is your custom video link: <a href='${link}'>${link}</a></p>`,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}