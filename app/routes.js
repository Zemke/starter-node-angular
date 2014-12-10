module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.all('/*', function(req, res, next) {
		if (req.url.split('/')[1] !== 'views') {
			res.render('index');
		} else {
			next();
		}
	});

	app.get('/views/:partial', function(req, res, next) {
		res.render('views/' + req.params.partial);
	});
};