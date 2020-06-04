require('dotenv');
const cors = require('cors');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql');

function App(){
  const middlewares = () => {
    app.use(express.json());
    app.use(cors());
    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true
      })
    );
  }

  const app = express();
  middlewares();

  return app;
}

module.exports = App();
