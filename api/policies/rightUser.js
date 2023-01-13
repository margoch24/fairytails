module.exports = function(req, res, next) {
	res.locals.flash = {};

	if(!req.session.authenticated) {
		var requireLoginErr = [{name: 'requireLogin', message: 'You must be signed in'}];
		req.session.flash = {
			err: requireLoginErr
		}
		res.redirect('/');
		return;
	}

	var sessionUserMatchesId = req.session.user_id == req.param('id');
	if(!(sessionUserMatchesId)) {
		var noRightsError = [{name: 'noRights', message: 'No rights!'}];
		req.session.flash = {
			err: noRightsError
		};
		res.redirect('/');
		return;
	}

	next();
};
