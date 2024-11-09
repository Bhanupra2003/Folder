const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number
})

const User = mongoose.model('users',UserSchema)

module.exports=User;