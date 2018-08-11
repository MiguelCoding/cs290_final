var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var storeModel = require('../models/store');
var menuModel = require('../models/menu');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'User homepage' });
});

// Routes for user login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login here' });
});

router.post('/login', function(req, res, next) {
  var data = req.body;
  res.render('/users', { user, title: 'Welcome back!' });
});

// Routes for users
router.get('/registerUser', function(req, res, next) {
  res.render('register-user');
});

router.post('/registerUser', function(req, res, next) {
  var data = req.body;
  userModel.registerUser(data,(err,results) => {
    if (err) throw err;
    res.redirect('/courseList');
  });
});

router.get('/editUser',function(req,res) {
  var userId = req.query.userId;
  userModel.retrieveUser(userId,(err,results)=> {
    if (err) throw err;
    var user = results[0];
    res.render('edit-user',{user});
  });
});

router.post('/editUser', function(req, res, next) {
  var data = req.body;
  userModel.updateUser(data,(err,results)=>{
    if (err) throw err;
    res.redirect('/users');
});

router.post('/deleteUser', function(req, res, next) {
  var id = req.body.id;
  userModel.deleteUser(id,(err,results) => {
    if (err) throw err;
    res.redirect('/view-users');
  });
});

// Routes for stores
router.get('/registerStore', function(req, res, next) {
  res.render('register-store');
});

router.post('/registerStore', function(req, res, next) {
  var data = req.body;
  storeModel.registerStore(data,(err,results) => {
    if (err) throw err;
    res.redirect('/users');
  });
});

router.get('/editStore',function(req,res) {
  var storeId = req.query.storeId;
  storeModel.retrieveStore(storeId,(err,results)=> {
    if (err) throw err;
    var store = results[0];
    res.render('edit-store',{store});
  });
});

router.post('/editStore', function(req, res, next) {
  var data = req.body;
  storeModel.updateStore(data,(err,results)=>{
    if (err) throw err;
    res.redirect('/users');
});

router.post('/deleteStore', function(req, res, next) {
  var id = req.body.id;
  storeModel.deleteStore(id,(err,results) => {
    if (err) throw err;
    res.redirect('/users');
  });
});

// Routes for menu modification
router.get('/viewMenu', function(req, res, next) {
  var id = req.query.store_id
  menuModel.retrieveMenu(id,(err, results) => {
    if (err) throw err;
    res.render('view-items', { items: results });
  })
});

router.get('/addItem', function(req, res, next) {
  res.render('add-item');
});

router.post('/addItem', function(req, res, next) {
  var data = req.body;
  menuModel.insertItems(data,(err,results)=>{
    if (err) throw err;
    res.redirect('/view-items');
});

router.get('/editItem', function(req, res, next) {
  res.render('edit-item', { title: 'Register a new store' });
});

router.get('/editItem',function(req,res) {
  var itemId = req.query.itemId;
  menuModel.retrieveItem(itemId,(err,results)=> {
    if (err) throw err;
    var item = results[0];
    res.render('edit-item',{item});
  });
});

router.post('/editItem', function(req, res, next) {
  var data = req.body;
  menuModel.updateMenu(data,(err,results)=>{
    if (err) throw err;
    res.redirect('/view-items');
});

router.post('/deleteItem', function(req, res, next) {
  var id = req.body.id;
  menuModel.deleteItem(id,(err,results) => {
    if (err) throw err;
    res.redirect('/view-items');
  });
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
