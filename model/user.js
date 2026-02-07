const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 6,
        maxlength:16
    },
    gender:{
        type: String,
        required: true,
        maxlength: 10
    },
    
    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        unique: true
    },

    role:{
        type: String,
        enum:["admin","patient","doctor","nurse"],
        default:"patient"
    }
});

module.exports = new mongoose.model("User", userschema);