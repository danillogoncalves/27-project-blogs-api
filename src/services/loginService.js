const { User } = require('../database/models');
const jwtService = require('./jwtService');

const loginService = {
  login: async (body) => {
    const user = await User.findOne({ where: { email: body.email } });
    if (!user || user.password !== body.password) {
      return { error: { code: 400, message: 'Invalid fields' } };
    }
    const onlyDatavalues = user.toJSON();
    const { id, password, image, ...userWithoutPassword } = onlyDatavalues;
    return jwtService.createToken(userWithoutPassword);
  },
};

module.exports = loginService;
