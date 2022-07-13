require('dotenv').config();
const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }
      const result = await loginService.login(req.body);
      if (result.error) {
        return res
          .status(result.error.code)
          .json({ message: result.error.message }); 
      }
      res.status(200).json({ token: result });
    } catch (error) {
      return res.status(500).json({ message: 'Internal error', error: error.message });
    }
  },
};

module.exports = loginController;