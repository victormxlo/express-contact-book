exports.global = (req, res, next) => {
    const date = Date(Date.now());
    console.log('Middleware checked: ' + date.toString());
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