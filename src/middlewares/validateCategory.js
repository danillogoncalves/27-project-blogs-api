const Joi = require('joi');

const validateCategory = (body) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) return { error: { code: 400, message: { message: error.details[0].message } } };

  return value;
};

module.exports = validateCategory;