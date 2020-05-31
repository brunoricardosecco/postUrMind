require('dotenv');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./database/schema/index');

const app = express();

app.use(express.json());

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
