const usersService = require('../services/usersService');
const validateUser = require('../middlewares/validateUser');

const usersController = {
  create: async (req, res) => {
    try {
      const validated = validateUser(req.body);
      if (validated.error) return res.status(validated.error.code).json(validated.error.message);
      const result = await usersService.create(req.body);
      if (result.error) return res.status(result.error.code).json(result.error.message);
      res.status(201).json({ token: result });
    } catch (error) {
      return res.status(500).json({ message: 'Internal error', error: error.message });
    }
  },
};

module.exports = usersController;