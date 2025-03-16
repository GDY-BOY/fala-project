import { db } from '@/lib/db';

export default async function handler(req, res) {
  const { id } = req.query;
  const data = await db.query('SELECT * FROM videos WHERE slug=$1', [id]);
  res.json(data.rows[0] || {});
}