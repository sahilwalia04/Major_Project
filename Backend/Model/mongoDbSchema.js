const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    time:{
        type: Date,
        default: Date.now,
    },
})


const googleuserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email:{
        type: String,
    },
    image: {
        type: String,
    },
    time:{
        type: Date,
        default: Date.now,
    },

})
const userModel = mongoose.model('user' , userSchema);
const googleUserModel = mongoose.model('googleuser', googleuserSchema);
module.exports = {userModel, googleUserModel};