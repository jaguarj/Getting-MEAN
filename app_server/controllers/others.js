// Controller

// GET About page
module.exports.about = function(req, res){
	res.render('generic-text', { title: 'Express About'});
}

