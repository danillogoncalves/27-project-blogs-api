const CreateBlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  };
  return BlogPost;
};

module.exports = CreateBlogPost;