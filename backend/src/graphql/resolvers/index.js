const fs = require("fs")

const resolvers = [];
fs.readdirSync(__dirname).forEach(file => {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    const resolver = require(`${__dirname}/${file}`);
    resolvers.push(resolver);
  }
})

module.exports = resolvers;
