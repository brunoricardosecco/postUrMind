module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return Author;
}
