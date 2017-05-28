// Router

var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// Created a named function, and then passed it
// through as a callback in the route definition.
// The controller should handle the app logic while
// the router maps Url requests to controllers.

// var homePageController = function(req, res) {
// 	res.render('index', { title: 'Express' });
// }

/* GET home page. */
router.get('/', ctrlMain.index);



module.exports = router;
