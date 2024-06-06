const Controller  = require("./controller");
const express = require("express");
const router = express();
const { Client } = require('pg');
const mongoose = require('mongoose');



// mongoose.connect('mongodb://user:mysecretpassword@0.0.0.0:8002/cesi_eats_mongo');

async function main(){
    await mongoose.connect('mongodb://user:mysecretpassword@0.0.0.0:8002/')
    .then(()=> {
        console.log('Connected to mongo');
    });

    const kittySchema = new mongoose.Schema({
        name :String,
        activity : String,
        rarity : String,
    });
    
    const Kitten = mongoose.model('Kitten', kittySchema);

    const MrFresh = new Kitten(
        { 
            name: 'MrFresh', 
            activity : 'FoodCritic', 
            rarity : 'Common'
        }
    );
    const TheGluttonousBeast = new Kitten(
        {
            name : 'TheGluttonousBeast',
            activity:'Eating',
            rarity:'Uncommon',
        }
    );

    //const AllKitten = [MrFresh, TheGluttonousBeast]
    await MrFresh.save();
    await TheGluttonousBeast.save();



    const database_postgres = new Client({
        user: 'user',
        password: 'mysecretpassword',
        host: '0.0.0.0',
        port: '8001',
        database: 'postgres',
    });

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
                database_postgres
                    .end()
                    .then(()=>{
                        console.log('Connection to PostgeSQL closed')
                    })
                    .catch((err) =>{
                        console.error('Error closing connection', err);
                    });
    
            });
    
        })
        .catch((err) => {
            console.error('Connection error', err)
        });

}

const test= main();

router.get("/hello", Controller.getHello);
module.exports = router;