const { Category } = require('../database/models');

const categoriesService = {
  create: async (body) => {
    const category = await Category.create(body);
    const onlyDatavalues = category.toJSON();
    return onlyDatavalues;
  },
  findAll: async () => {
    const categories = await Category.findAll();
    return categories;
  },
};

module.exports = categoriesService;