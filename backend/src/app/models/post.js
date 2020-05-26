const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    authorId: {
      type: DataTypes.INTEGER,
      references: 'authors',
      referenceKey: 'id'
    }
  });

  Post.associate = (models) => {
    models.Post.belongsTo(models.Author, {
      onDelete: "CASCADE",
    })
  }

  return Post;
}
