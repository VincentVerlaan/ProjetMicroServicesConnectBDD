const express = require("express")
const { Client } = require('pg');
const app = express();
const data = 'skibidi';

const database_postgres = new Client({user: 'user',password: 'mysecretpassword',host: '0.0.0.0',port: '8001',database: 'postgres',});
database_postgres.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
});

exports.getHello  = (req, res)=>{
    res.send(data);
};

//Select data
exports.getData = (req, res)=>{
    database_postgres.query('SELECT * FROM test', (err, result)=>{
        if (err) {
            console.error('Error executing query', err);
        }
        else{
            console.log('Query result:', result.rows);
        }
        res.send(result.rows);
    });
};


//Insert Data
exports.insertData = (req, res) =>{
    const insert = 'INSERT INTO test(individu, boisson) VALUES ($1,$2)';
    const values = ['Vincent', 'Potage'];
    database_postgres.query(insert, values, (err, result)=>{
        if (err){
            console.error('Error inserting data', err);
        }
        else{
            console.log("Data inserted");
            res.send(result.rows);
        }
    })
};











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


