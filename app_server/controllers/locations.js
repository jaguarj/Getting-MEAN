// GET 'home' page
module.exports.homelist = function(res, res) {
	res.render('locations-list', { title: 'Home' });
};

// GET 'locations' page
module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title: 'Location Info' });
};

// GET 'Add review' page
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title: 'Add review' });
};
