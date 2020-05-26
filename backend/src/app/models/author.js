const Post = require('./post');

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Author.associate = (models) => {
    models.Author.hasMany(models.Post);
  }

  return Author;
}
