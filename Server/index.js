const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./connectdb");
const Usermodel = require("./models/user");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt")


// import  express  from "express";
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import connectDb from './connectdb';

const app = express();
dotenv.config();

app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))

connectDb();


app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        Usermodel.create({name, email, password: hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    Usermodel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                  const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", {expiresIn: '1d'})  
                    res.cookie('token', token)
                    return res.json({Status: "Success", role: user.role})
                }else {
                    return res.json("The password is incorrect")
                }
            })
        } else {
            return res.json("No record existed")
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log(`app is running in ${process.env.PORT}`)
})