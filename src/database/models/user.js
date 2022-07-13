const CreateUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'BlogPosts', foreignKey: 'userId' })
  };
  return User;
};

module.exports = CreateUser;