const categoriesService = require('../services/categoriesService');
const jwt = require('../middlewares/jwt');
const validateCategory = require('../middlewares/validateCategory');

const categoriesController = {
  create: async (req, res) => {
    const token = req.headers.authorization;
    const validatedToken = jwt.verifyToken(token);
    if (validatedToken.error) {
      return res
        .status(validatedToken.error.code)
        .json(validatedToken.error.message);
    }
    const validatedBody = validateCategory(req.body);
    if (validatedBody.error) {
      return res
        .status(validatedBody.error.code)
        .json(validatedBody.error.message);
    }
    const result = await categoriesService.create(validatedBody);
    res.status(201).json(result);
  },
};

module.exports = categoriesController;