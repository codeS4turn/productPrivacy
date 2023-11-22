const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
        max:[3000,'Your name is too long'],
        min:[1, 'Your name is too short'],
        required:[true,"Your fullname is required"]

    },

    email:{
        type:String,
        max:[2000,'Characters too much'],
        min:[1,"Characters are too small"],
        required:[true, 'Email required']
    },

    password:{
        type:String,
        max:[20021,'Characters are too much'],
        min:[1,"Characters are too small"],
        required:[true, "Password is required"]
    },

    bvn:{
        type:String,
        max:[2000,'Characters are too much'],
        min:[10,'Character are too low'],
        required:[true,'BVN is required']
    }



})

const User = mongoose.model('User',userSchema)

module.exports=User