const express = require('express')
const mongoose = require('mongoose')
const app = express();

const url = 'mongodb://localhost/MernApp'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log("Connected")
})

app.listen(9000,()=>{
    console.log('Server Started')
})