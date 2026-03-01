const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const doctorschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    workerId:{
        type: String,
        required: true,
        unique: true
    },

    workerPassword:{
        type: String,
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

doctorschema.pre("save", async function(next) { 
    if(!this.isModified("workerPassword")) return next();

    const salt = await bcrypt.genSalt(10);
    this.workerPassword = await bcrypt.hash(this.workerPassword, salt);

    next();
    
})

const Doctor = new mongoose.model("Doctor", doctorschema);

module.exports = Doctor;