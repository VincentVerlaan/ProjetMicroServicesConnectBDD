const Pause  = require("../microservices/pauseCafe");
const Cats = require("../microservices/catsWiki");
const express = require("express");
const router = express();
const { Client } = require('pg');
const mongoose = require('mongoose');

router.get("/hello", Pause.getHello);
router.get("/testService", Pause.getTestService);
router.get("/pause", Pause.getData);
router.get("/cats", Cats.getKittens);
module.exports = router;

//mongoose.connect('mongodb://user:mysecretpassword@0.0.0.0:8002/cesi_eats_mongo');

// async function main(){
//     await mongoose.connect('mongodb://user:mysecretpassword@0.0.0.0:8002/')
//     .then(()=> {
//         console.log('Connected to mongo');
//     });

//     const kittySchema = new mongoose.Schema({
//         name :String,
//         activity : String,
//         rarity : String,
//     });
    
//     const Cats = mongoose.model('Cats', kittySchema);

//     const MrFresh = new Cats(
//         { 
//             name: 'MrFresh', 
//             activity : 'FoodCritic', 
//             rarity : 'Common'
//         }
//     );
//     const TheGluttonousBeast = new Cats(
//         {
//             name : 'TheGluttonousBeast',
//             activity:'Eating',
//             rarity:'Uncommon',
//         }
//     );

//     //const AllKitten = [MrFresh, TheGluttonousBeast]
//     await MrFresh.save();
//     await TheGluttonousBeast.save();

// }

// const test= main();

