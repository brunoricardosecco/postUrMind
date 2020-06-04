const fs = require("fs")

const schemas = [];
fs.readdirSync(__dirname).forEach(file => {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    const schema = require(`${__dirname}/${file}`);
    schemas.push(schema);
  }
})

module.exports = schemas;
