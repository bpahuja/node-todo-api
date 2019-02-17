var mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
var UserSchema = new mongoose.Schema(
    {
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
    }
);

UserSchema.methods.generateAuthToken = function(){
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
  user.tokens.push({access, token});
  return user.save().then(()=>{
      return token;
  });
};

var User = mongoose.model('User',UserSchema);

module.exports = {User};