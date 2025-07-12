import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db();
    const users = db.collection('users');

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await users.insertOne({ name, email, password: hashedPassword });

    return res.status(201).json({ message: 'User registered' });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
