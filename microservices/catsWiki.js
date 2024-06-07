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


