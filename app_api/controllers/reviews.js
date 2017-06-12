var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.reviewsCreate = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.reviewsReadOne = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.reviewsUpdateOne = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.reviewsDeleteOne = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};


// router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
// router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
// router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
// router.delete('/locations/:locationid/reviews/:reviewsid', ctrlReviews.reviewsDeleteOne);
