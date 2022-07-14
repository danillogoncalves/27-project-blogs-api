const Joi = require('joi');

const validateUser = (body) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { error, value } = schema.validate(body);

  if (error) return { error: { code: 400, message: { message: error.details[0].message } } };

  return value;
};

module.exports = validateUser;