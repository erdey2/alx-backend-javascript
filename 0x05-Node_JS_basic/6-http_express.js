const express = require('express');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  app.statusCode = 200;
  res.send('Hello Holberton School!');
});
  
  app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
