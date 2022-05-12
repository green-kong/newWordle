const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'ingoo';

module.exports = {
  sign: (user) => {
    const payload = {
      Email: user.Email,
      nickname: user.nickname,
      u_id: user.u_id,
      provider: user.provider,
    };

    return jwt.sign(payload, JWT_SECRET, {
      algorithm: 'HS256',
      // expiresIn:'1h',
    });
  },
};
