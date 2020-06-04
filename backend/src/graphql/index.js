const { makeExecutableSchema } = require('graphql-tools');

const Schemas = require('./schemas');
const Resolvers = require('./resolvers');

const globalSchema = makeExecutableSchema({
  typeDefs: Schemas,
  resolvers: Resolvers
})

module.exports = globalSchema;
