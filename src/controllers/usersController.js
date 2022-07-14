const usersService = require('../services/usersService');
const validateUser = require('../middlewares/validateUser');
const jwt = require('../middlewares/jwt');

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
  findAll: async (req, res) => {
    const token = req.headers.authorization;
    const validated = jwt.verifyToken(token);
    if (validated.error) return res.status(validated.error.code).json(validated.error.message);
    const result = await usersService.findAll();
    res.status(200).json(result);
  },
};

module.exports = usersController;