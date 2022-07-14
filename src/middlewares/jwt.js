require('dotenv').config();
const JWT = require('jsonwebtoken');

const jwt = {
  createToken: (data) => {
    const jwtConfig = { algorithm: 'HS256' };
    const token = JWT.sign(data, process.env.JWT_SECRET, jwtConfig);
    return token;
  },
  verifyToken: (token) => {
    try {
      if (!token) return { error: { code: 401, message: { message: 'Token not found' } } };
      const validated = JWT.verify(token, process.env.JWT_SECRET);
      return validated;
    } catch (error) {
      return { error: { code: 401, message: { message: 'Expired or invalid token' } } };
    }
  },
};

module.exports = jwt;