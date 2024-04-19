const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./connectdb");
const User = require("./models/user")


// import  express  from "express";
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import connectDb from './connectdb';





const app = express();
dotenv.config();

app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

connectDb();


app.listen(process.env.PORT, () => {
    console.log(`app is running in ${process.env.PORT}`)
})