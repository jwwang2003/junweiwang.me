import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Redis from 'ioredis';

dotenv.config();

function generateAccessToken() {
  return jwt.sign(new Date.toString(), process.env.TOKEN_SECRET, { expiresIn: '24h', algorithm: 'hs256' });
}

function verifyAccessToken(token) {
  return jwt.verify(token, process.env.TOKEN_SECRET);
}

const redis = new Redis(process.env.REDIS_URL);

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end(`Method ${req.method} Not Allowed`);
  return res.status(200).json({ name: 'John Doe' });
  switch (req.method) {
    case 'POST':
      return authenticate();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
