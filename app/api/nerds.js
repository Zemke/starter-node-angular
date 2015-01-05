var Nerd = require('../models/Nerd');

exports.add = function (req, res) {
	Nerd.create(req.body, function (err, nerd) {
		if (err) {
			return handleError(res, err);
		}
		return res.json(201, nerd);
	});
};