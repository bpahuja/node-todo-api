var mongoose = require('mongoose');
const validator = require('validator');
var User = mongoose.model('User',{
    email:{
        type:String,
        require:true,
        trim:true,
        minlength:1,
        unique:true,
        validate:{
          validator: validator.isEmail,
            message:"{VALUE} not a valid email"
        },
    },
    password:{
        type: String,
        require: true,
        minLength: 6,
    },
    tokens: [{
        access:{
            type: String,
            require: true,
        },
        token:{
            type: String,
            require: true,
        }
    }]
});

module.exports = {User};