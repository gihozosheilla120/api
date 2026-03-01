const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const nurseschema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxlength:15,
        minlength:6
    },
    gender:{
        type: String,
        required: true,

    },

    workerId:{
        type: String,
        required: true,
        unique: true
    },

    workerPassword:{
        type: String,
        required: true,
        unique: true
    },
    
    email:{
        type:String,
        required:true,
        unique: true
    }

});

nurseschema.pre("save", async function(next){
    if(!this.isModified("workerPassword"))
      return  next();
    
    const salt = await bcrypt.genSalt(10);
    this.workerPassword = await bcrypt.hash(this.workerPassword,salt);
    next();
})

module.exports = new mongoose.model("nurse", nurseschema);