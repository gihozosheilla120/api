const mongoose = require("mongoose");
const Patient = require("../model/patient");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken= require("../middleware/auth");

const router = express.Router();

router.post("/patient", async(req,res) => {
try{
    const {name, gender, age , number, email } = req.body;

    const patient = new Patient({
        name,gender,age,number,email
    });
    await patient.save();
    res.status(201).json("Patient saved successfully!")
}
 catch(error){
    res.status(500).json("patient not saved well")
 }
});

router.get("/patient/test", (req,res) => {
    res.send("your patient side is working perfectly")
});

module.exports = router;