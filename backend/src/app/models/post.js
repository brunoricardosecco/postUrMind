const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    message: DataTypes.STRING,
  });

  Post.associate = (models) => {
    models.Post.belongsTo(models.Author, {
      foreignKey: 'authorId', as: 'author'
    })
  }

  return Post;
}
