var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  name_first: {
    type: String,
    required: true,
    trim: true,
  },
  name_middle: {
    type: String,
    required: false,
    trim: true,
  },
  name_last: {
    type: String,
    required: true,
    trim: true,
  },
  address_street: {
    type: String,
    required: true,
    trim: true
  },
  address_city: {
    type: String,
    required: true,
    trim: true
  },
  address_state: {
    type: String,
    required: true,
    trim: true
  },
  address_zip: {
    type: String,
    required: true,
    trim: true
  },
  address_lat: {
    type: String,
    required: false,
    trim: true
  },
  address_lon: {
    type: String,
    required: false,
    trim: true
  },
  phone_home: {
    type: String,
    required: false,
    trim: true
  },
  phone_mobile: {
    type: String,
    required: false,
    trim: true
  },
  phone_work: {
    type: String,
    required: false,
    trim: true
  }
});
// authenticate input against database docuents
UserSchema.statics.authenticate = function(email, password, callback){
  User.findOne({email: email })
    .exec(function (error, user){
      if (error){
        return callback(error);

      }else if ( !user ){
          var err = new Error('User not found. ');
          err.status = 401;
          return callback(err);
      }
      bcrypt.compare(password, user.password, function(error, result){
          if(result === true){
            return callback(null, user);
          }else{
            return callback();
          }
      })
    });
}
// hash password before saving to database
UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err,hash){
      if(err){

        return next(err);
      }
      user.password = hash;
      next();
  })
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
