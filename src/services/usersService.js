const { User } = require('../database/models');
const jwtService = require('./jwtService');

const usersService = {
  create: async (body) => {
    const user = await User.findOne({ where: { email: body.email } });
    if (user) return { error: { code: 409, message: { message: 'User already registered' } } };
    await User.create(body);
    const { id, password, image, ...userPublicInfo } = body;
    return jwtService.createToken(userPublicInfo);
  },
};

module.exports = usersService;