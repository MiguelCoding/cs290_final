var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var storeModel = require('../models/store');
var menuModel = require('../models/menu');
var mid = require('../middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login or view store map' });
});

// Route for displaying public map
router.get('/map', function(req, res, next) {
  apiKeys = require('../config/apicredentials.json');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  res.render('map', { apiKeys, title: 'Stores near you' });
});

router.get('/profile', mid.requiresLogin, function(req, res, next) {

  User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.render('profile', { title: 'Profile', name: user.name, favorite: user.favoriteBook });
        }
      });
});

module.exports = router;
