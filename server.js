const express = require("express");
const app = express();     // this app variable we use to configure our server or we use this app in our server
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost/subscribers",{ useNewUrlParser:true})

app.listen(3000 , () =>{
    console.log("server started");
})