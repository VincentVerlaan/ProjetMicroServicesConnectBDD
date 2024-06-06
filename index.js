const express = require('express');
const app = express();
const routes = require('./api/routes');
const mongoose = require('mongoose');
const { Client } = require('pg');
app.use(routes);


app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Microservice listening on port 3000');
});

// mongoose.connect('mongodb://user:mysecretpassword@0.0.0.0:8002/')
// .then(()=> {
//   console.log('Connected to mongo');
// });

// mongoose
// .disconnect()
// .then(()=>{
//   console.log('Disconnected');
// });

// const database_postgres = new Client({
//   user: 'user',
//   password: 'mysecretpassword',
//   host: '0.0.0.0',
//   port: '8001',
//   database: 'postgres',
// });

// database_postgres
// .connect()
// .then(() => {
//   console.log('Connected to PostgreSQL database');
// });

// database_postgres
// .end()
// .then(()=>{
//   console.log("Disconnect")
// });




