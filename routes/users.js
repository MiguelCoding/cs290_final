var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user home page');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login here' });
});

router.get('/order', function(req, res, next) {
  res.render('order', { title: 'Place an order' });
});

router.post('/order', function(req, res, next) {
  var order = req.body;
  res.render('order submitted!');
});

module.exports = router;
