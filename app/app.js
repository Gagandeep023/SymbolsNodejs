const express = require('express');
const port = 3000;
const withJson = require('./withJson/index');
const withModel = require('./withModel/index');

const app = express();

app.use(express.json());
app.use('/api/v1/file', withJson);
app.use('/api/v2/file', withModel);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});