var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login or view store map' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Stores near you' });
});

module.exports = router;
