const postsService = require('../services/postsService');
const validatePost = require('../middlewares/validatePost');
const jwt = require('../middlewares/jwt');

const postsController = {
  create: async (req, res) => {
    const token = req.headers.authorization;
    const validatedToken = jwt.verifyToken(token);
    if (validatedToken.error) {
      return res.status(validatedToken.error.code).json(validatedToken.error.message);
    }
    const validateBody = validatePost(req.body);
    if (validateBody.error) {
      return res.status(validateBody.error.code).json(validateBody.error.message);
    }
    const { email } = validatedToken;
    const result = await postsService.create(validateBody, email);
    if (result.error) return res.status(result.error.code).json(result.error.message);
    res.status(201).json(result);
  },
};

module.exports = postsController;