require('dotenv');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/index');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3001, () => {
  console.log('Opening for requests on port 3001');
});
