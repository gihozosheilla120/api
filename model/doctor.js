const mongoose = require("mongoose");

const doctorschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    workerId:{
        type: Number,
        required: true,
        unique: true
    },

    workerPassword:{
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    department:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true
    },
    
});

const Doctor = new mongoose.model("Doctor", doctorschema);

module.exports = Doctor;