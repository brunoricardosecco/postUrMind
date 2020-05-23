const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({}));

app.listen(3001, () => {
  console.log('Opening for requests on port 3001');
});
