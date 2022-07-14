const { User } = require('../database/models');
const jwt = require('../middlewares/jwt');

const loginService = {
  login: async (body) => {
    const user = await User.findOne({ where: { email: body.email } });
    if (!user || user.password !== body.password) {
      return { error: { code: 400, message: { message: 'Invalid fields' } } };
    }
    const onlyDatavalues = user.toJSON();
    const { id, password, image, ...userPublicInfo } = onlyDatavalues;
    return jwt.createToken(userPublicInfo);
  },
};

module.exports = loginService;
