const hello = require("./catsWiki");
const express = require("express")
const { Client } = require('pg');
const app = express();
const data = 'skibidi';
exports.getHello  = (req, res)=>{
    res.send(data);
    
};

const database_postgres = new Client({
    user: 'user',
    password: 'mysecretpassword',
    host: '0.0.0.0',
    port: '8001',
    database: 'postgres',
});

//Select data
exports.getData = (req, res)=>{
    
    database_postgres
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
        database_postgres.query('SELECT * FROM test', (err, result)=>{
            if (err) {
                console.error('Error executing query', err);
            }
            else{
                console.log('Query result:', result.rows);
            }
            res.send(result.rows);
            database_postgres
            .end()
            .then(()=>{
                console.log('Connection to PostgeSQL closed')
            })
            .catch((err) =>{
                console.error('Error closing connection', err);
            });
        });
    });
};


//Insert Data
exports.insertData = (req, res) =>{
    database_postgres
    .connect()
    .then(()=>{
        console.log('Connected to', database_postgres.database,' database');
        
        const insert = 'INSERT INTO test(individu, boisson) VALUES ($1,$2)';
        const values = ['Vincent', 'Potage'];
        database_postgres.query(insert, values, (err, result)=>{
            if (err){
                console.error('Error inserting data', err);
            }
            else{
                console.log("Data inserted");
                database_postgres.end().then(()=>{
                    console.log("Connection closed");
                    res.send(result.rows);
                });
            }
        })

    })
}










exports.getTestService = (req, res) => {
    res.send(hello.Skibidi)
}

//             database_postgres.query('SELECT * FROM test', (err, result)=>{
//                 if (err) {
//                     console.error('Error executing query', err);
//                 }
//                 else{
//                     console.log('Query result:', result.rows);
//                 }


