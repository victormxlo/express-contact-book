exports.global = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
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