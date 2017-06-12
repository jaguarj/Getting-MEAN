// app_server Controller

// GET About page
module.exports.about = function(req, res){
	res.render('generic-text', {
		title: 'About Loc8r',
		content: `Loc8r was created to help people find places to sit down and git a bit of work done.
		\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
	});
}

