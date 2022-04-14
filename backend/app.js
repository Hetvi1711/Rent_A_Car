const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("hello wolrd")
});
app.listen(3000,()=>{
    console.log("server is running at port 3000");
});
require("dotenv").config();
const DB = process.env.Db_URL;
const mongoose = require('mongoose');
mongoose.connect(DB).then(()=>{console.log("Connection Sucessfully");}).catch((err)=>console.log("No Connection"));
