var nerds = require('./nerds');

module.exports = function (app) {
	
	app.post('/api/nerd/add', nerds.add);
};