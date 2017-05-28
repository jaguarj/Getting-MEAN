// Router

var express = require('express');
var router = express.Router();
// var ctrlMain = require('../controllers/main');

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

// Locations pages
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

// Other pages
router.get('/about', ctrlOthers.about);

// Created a named function, and then passed it
// through as a callback in the route definition.
// The controller should handle the app logic while
// the router maps Url requests to controllers.

// var homePageController = function(req, res) {
// 	res.render('index', { title: 'Express' });
// }

/* GET home page. */
// router.get('/', ctrlMain.index);

module.exports = router;
