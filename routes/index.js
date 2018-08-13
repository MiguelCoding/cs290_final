var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var storeModel = require('../models/store');
var menuModel = require('../models/menu');
var mid = require('../middleware');
var apiKeys = require('../config/apicredentials.json');
var googleMapsClient = require('@google/maps').createClient({
  key: apiKeys.mapsStaticKey
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login or view store map' });
});

// Route for displaying public map
router.get('/map', function(req, res, next) {
  res.render('map', { apiKey: apiKeys.mapsStaticKey, title: 'Stores near you' });
});

router.get('/profile', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.render('profile', { title: 'Profile', name: user.name });
        }
      });
});

router.get('/logout', function(req, res, next) {
  if (req.session) {
    req.session.destroy(function(err) {
      if(err) throw err;
      return res.redirect('/');
    });
  }
});

router.get('/login', mid.loggedOut, function(req, res, next) {
  return res.render('login', { title: 'Log In'});
});

router.post('/login', function(req,res, next){
  if (req.body.email && req.body.password){
    User.authenticate(req.body.email, req.body.password, function(error,user){
      if (error || !user) {
        var err = new Error('Incorrect email and/or password. ');
        err.status = 401;
        return next(err);
      } else{
        req.session.userId = user._id;  //tell add property or add new session of not exist
        return res.redirect('/profile');//redirect to profile page
      }
    });
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);

  }
});

router.get('/register', mid.loggedOut, function(req, res, next){

return res.render('register', { title: 'Sign Up'});
});

router.post('/register', function(req,res, next){

  if (
    req.body.email &&
    req.body.name_first &&
    req.body.name_last &&
    req.body.address_street &&
    req.body.address_city &&
    req.body.address_state &&
    req.body.address_zip &&
    req.body.phone &&
    req.body.password &&
    req.body.confirmPassword
  ) {

    //confirm that user typed same password twice
    if (req.body.password !== req.body.confirmPassword){
      var err = new Error('Password do not match.');
      err.status = 400;
      return next(err);
    }

    // create object with form input
    var userData = {
      email: req.body.email,
      password: req.body.password,
      name_first: req.body.name_first,
      name_last: req.body.name_last,
      address_street: req.body.address_street,
      address_city: req.body.address_city,
      address_state: req.body.address_state,
      address_zip: req.body.address_zip,
      phone: req.body.phone,
    };

    // use schema's create method to insert into mongo
    User.create(userData, function (error, user) {
      if (error){
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  } else {
    var err = new Error('All fields required. ');
    err.status = 400;
    return next(err);
  }
})

router.get('/about',function(req, res, next) {
  return res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
