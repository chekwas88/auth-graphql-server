import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (token) => {
  
  try {
    return jwt.verify(token, process.env.SECRET_KEY)
  } catch (error) {
    return false;
  }
}