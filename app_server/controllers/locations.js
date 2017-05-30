// GET 'home' page
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
		title: 'Loca8r - Find a place to work with wifi',
		pageHeader: {
			title: 'Loca8r',
			strapline: 'Find places to work with wifi near you!'
		}
	});
};

// GET 'locations' page
module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title: 'Location Info' });
};

// GET 'Add review' page
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title: 'Add review' });
};
