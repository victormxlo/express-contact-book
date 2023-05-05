module.exports.global = (req, res, next) => {
    const date = Date(Date.now());
    if (req.body.client) {
        console.log(req.body.client + " form posted.");
    }
    console.log('Middleware checked: ' + date.toString());
    next();
};

module.exports.CSRFErrorChecker = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        res.render('error-page.ejs', {
            error: 'INVALID CSRF TOKEN',
            info: 'Unauthorized access.'
        });
    };
};

module.exports.CSRFToken = (req, res, next) => {
    res.locals.token = req.csrfToken();

    next();
};