module.exports = function(app) {
	
	app.all('/*', function(req, res, next) {
		var arbitraryUrls = ['partials', 'api'];
		if (arbitraryUrls.indexOf(req.url.split('/')[1]) > -1) {
			next();
		} else {
			res.render('index');
		}
	});

	app.get('/partials/*', function(req, res, next) {
		res.render('.' + req.path);
	});
};