var mongoose = require('mongoose');
var Loc = mongoose.model('Location');


var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.locationsListByDistance = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsCreate = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsReadOne = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsUpdateOne = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsDeleteOne = function(req, res) {
	sendJsonResponse(res, 200, {'status' : 'success'});
};






// router.get('/locations', ctrlLocations.locationsListByDistance);
// router.post('/locations', ctrlLocations.locationsCreate);
// router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
// router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
// router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);
