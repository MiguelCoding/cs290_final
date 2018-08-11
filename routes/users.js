var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'User homepage' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login here' });
});

router.get('/registerUser', function(req, res, next) {
  res.render('register-user', { title: 'Register a new user' });
});

router.post('/registerUser', function(req, res, next) {
  var user = req.body;
  res.render('User created!');
});

router.get('/registerStore', function(req, res, next) {
  res.render('register-user', { title: 'Register a new store' });
});

router.post('/registerStore', function(req, res, next) {
  var user = req.body;
  res.render('Store created!');
});

router.get('/order', function(req, res, next) {
  res.render('order', { title: 'Place an order' });
});

router.post('/order', function(req, res, next) {
  var order = req.body;
  res.render('order submitted!');
});

module.exports = router;
