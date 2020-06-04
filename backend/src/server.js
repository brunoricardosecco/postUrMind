require('dotenv').config();

const app = require('./app');

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log('Opening for requests on port 3001');
});
