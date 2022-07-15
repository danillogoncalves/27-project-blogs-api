const Joi = require('joi');

const validatePost = (body) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    return { error: { code: 400, message: { message: 'Some required fields are missing' } } };
  }

  return value;
};

module.exports = validatePost;