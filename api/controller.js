const hello = require("../microservices/hello");
const express = require("express")
const app = express()
const data = 'skibidi'
exports.getHello  = (req, res)=>{
    res.send(data);
};

