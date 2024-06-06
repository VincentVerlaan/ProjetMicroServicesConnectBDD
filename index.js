const express = require('express');
const app = express();
const routes = require('./api/route');
app.use(routes);


app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Microservice listening on port 3000');
});


