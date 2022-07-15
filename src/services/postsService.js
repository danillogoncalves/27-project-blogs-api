const { User, Category, BlogPost, PostCategory } = require('../database/models');

const postsService = {
  create: async (body, email) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return { error: { code: 404, message: { message: 'User not found' } } };
    const { title, content, categoryIds } = body;
    const categories = await Category.findAll();
    const validadCategories = categoryIds
      .every((eId) => categories
      .some((category) => eId === category.toJSON().id));
    if (!validadCategories || categoryIds.length === 0) {
      return { error: { code: 400, message: { message: '"categoryIds" not found' } } };
    }
    const post = await BlogPost.create({ title, content, userId: user.id });
    const { id } = post.toJSON();
    await PostCategory.bulkCreate(categoryIds.map((eId) => ({ postId: id, categoryId: eId })));
    return post;
  },
  findAll: async () => {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  },
};

module.exports = postsService;