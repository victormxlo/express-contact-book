exports.global = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.CSRFErrorChecker = (err, req, res, next) => {
    if (err) {
        return res.render('error-page.ejs');
    };
    next();
};

exports.CSRFToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'You must be logged in.');
        req.session.save(() => res.redirect('/'));
        return;
    };
    next();
}; 