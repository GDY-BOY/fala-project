import { db } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { slug, videoUrl, text } = req.body;

  try {
    await db.query(
      'INSERT INTO videos (slug, videos, text) VALUES ($1, $2, $3)',
      [slug, [videoUrl], text]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save video' });
  }
}