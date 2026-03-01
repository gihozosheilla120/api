const mongoose = require("mongoose");

const express = require("express");

const Nurse = require("../model/nurse");

const router = express.Router();

router.post("/nurse", async(req, res) => {
    try{
        const{name, gender, workerId, workerPassword, email} = req.body;

        const nurse = new Nurse({
            name, gender, workerId, workerPassword, email
        })
         
        await nurse.save();
        res.status(201).json("Nurse saved successfully!")
    }
    catch(error){
        res.status(500).json("Nurse not saved well")
    }
});

router.get("/nurse/test", (req,res) => {
    res.send("the nurse part is working perfectly!")
});

module.exports = router;