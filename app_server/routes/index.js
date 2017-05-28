var express = require('express');
var router = express.Router();

// Created a named function, and then passed it
// through as a callback in the route definition.

var homePageController = function(req, res) {
	res.render('index', { title: 'Express' });
}

/* GET home page. */
router.get('/', homePageController);



module.exports = router;
