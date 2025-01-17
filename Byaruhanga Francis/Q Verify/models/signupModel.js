const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },

    lastname:{
        type:String,
        trim:true
    },

    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },

    dob:{
        type:String,
        trim:true,
    },

    gender:{
        type:String,
        trim:true,
    },

    country:{
        type:String,
        trim:true,
        unique:true,
    },
    state:{
        type:String,
        trim:true,
        unique:true,
    },
    town:{
        type:String,
        trim:true,
        unique:true,
    },
    zipcode:{
        type:String,
        trim:true,
        unique:true,
    },
    phonenumberone:{
        type:String,
        trim:true,
        unique:true,
    },

    phonenumbertwo:{
        type:String,
        trim:true,
        unique:true,
    },

    nin:{
        type:String,
        trim:true,
        unique:true,
    },

    address:{
        type:String,
        trim:true,
    },
    role:{
        type:String,
        trim:true,
    },

    ward:{
        type:String,
        trim:true,
    },

    email:{
        type:String,
        trim:true,
        unique:true,
    },

})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema)