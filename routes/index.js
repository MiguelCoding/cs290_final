var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var storeModel = require('../models/store');
var menuModel = require('../models/menu');
var bcrypt = require('bcrypt');
var connect = require('connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login or view store map' });
});

// Route for displaying public map
router.get('/map', function(req, res, next) {
  apiKeys = require('../config/apicredentials.json');
  res.render('map', { apiKeys, title: 'Stores near you' });
});

module.exports = router;
