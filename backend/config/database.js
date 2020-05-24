require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_USERNAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
  }
}
