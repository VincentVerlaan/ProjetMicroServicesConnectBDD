const express = require('express');
const app = express();
const mongoose = require('mongoose');


function sayKai(){
    const value = 'KaiCenat';
    return value;
};

exports.Skibidi = (req, res) =>{
    res.send(sayKai());
};

const catsSchema = new mongoose.Schema({
    name :String,
    activity : String,
    rarity : String,
});

const Cats = mongoose.model('Cats', catsSchema);
exports.getKittens = (req, res) =>{
    mongoose.connect('mongodb://user:mysecretpassword@0.0.0.0:8002/')
    .then(()=> {
        console.log('Connected to mongo');
    });
    
    
    Cats.find().then((cats) =>{
        console.log(cats);
        res.json(cats)
    });





    
    //res.send(allCats);
    // mongoose
    // .disconnect()
    // .then(()=>{
    //     console.log('Disconnected');
    // });

};
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



