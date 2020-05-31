const Post = require('./post');

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Author.associate = (models) => {
    models.Author.hasMany(models.Post, { foreignKey: 'authorId', as: 'posts'});
  }

  return Author;
}
