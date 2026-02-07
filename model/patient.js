const mongoose = require("mongoose");

const patientscheme = new mongoose.Schema({
    name:{
        type:"string",
        required: true
    },

    gender:{
        type:"string",
        required: true
    },

    age:{
        type: Number,
        required: false
    },

    number:{
        type: Number,
        required: true,
        unique: true
    },

    email:{
        type:"string",
        unique: true,
        required: true
    }

});

const patient = new mongoose.model("Patient", patientscheme);

module.exports = patient;