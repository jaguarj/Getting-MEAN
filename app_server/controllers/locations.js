// GET 'home' page
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
		title: 'Loca8r - Find a place to work with wifi',
		pageHeader: {
			title: 'Loca8r',
			strapline: 'Find places to work with wifi near you!'
		},
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
			distance: '100m'
		}, {
			name: 'Cafe Hero',
			address: '325 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
			distance: '200m'
		}, {
			name: 'Burger Queen',
			address: '234 Read Street, Sun Valley, RG6 2PS',
			rating: 5,
			facilities: ['Food', 'Premium Wifi'],
			distance: '500m'
		}]
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
