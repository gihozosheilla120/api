const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const patientscheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    gender:{
        type: String,
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
        type: String,
        unique: true,
        required: true
    }

});


const patient = new mongoose.model("Patient", patientscheme);

module.exports = patient;