var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var storeModel = require('../models/store');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'User homepage' });
});

// Routes for user login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login here' });
});

router.post('/login', function(req, res, next) {
  var user = req.body;
  res.render('/users', { user, title: 'Welcome back!' });
});

// Routes for user registration
router.get('/registerUser', function(req, res, next) {
  res.render('register-user', { title: 'Register a new user' });
});

router.post('/registerUser', function(req, res, next) {
  var user = req.body;
  res.redirect('/users');
});

// Routes for store registration
router.get('/registerStore', function(req, res, next) {
  res.render('register-user', { title: 'Register a new store' });
});

router.post('/registerStore', function(req, res, next) {
  var user = req.body;
  res.render('Store created!');
});

// Routes for menu modification
router.get('/viewMenu', function(req, res, next) {
  var id = req.query.store_id
  courseModel.retrieveMenu(id,(err, results) => {
    if (err) throw err;
    res.render('course-list', { courses: results });
  })
});

router.get('/addItem', function(req, res, next) {
  res.render('add-item', { title: 'Register a new store' });
});

router.post('/addItem', function(req, res, next) {
  res.render('register-user', { title: 'Register a new store' });
});

router.post('/registerStore', function(req, res, next) {
  var user = req.body;
  res.render('Store created!');
});


// Routes for order placement
router.get('/order', function(req, res, next) {
  res.render('order', { title: 'Place an order' });
});

router.post('/order', function(req, res, next) {
  var order = req.body;
  res.render('order submitted!');
});

module.exports = router;
