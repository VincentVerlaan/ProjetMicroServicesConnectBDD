const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { Client } = require('pg');
const Pause  = require("./microservices/pauseCafe");
const Cats = require("./microservices/catsWiki");


//app.use(routes);
app.get('/test', (req, res) => {
  res.send('Hello, World!');
});
app.get("/pause", Pause.getData);
app.get("/hello", Pause.getHello);
app.get("/testService", Pause.getTestService);
app.get("/pause", Pause.getData);
app.get("/cats", Cats.getKittens);
app.post("/pause", Pause.insertData);
app.listen(3000, () => {
  console.log('Microservice listening on port 3000');
});



//module.exports = database_postgres;


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




