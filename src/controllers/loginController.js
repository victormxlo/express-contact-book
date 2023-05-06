const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logged.ejs');
    return res.render('login.ejs');
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('/login/index');
            });
            return;
        };
        
        req.flash('success', 'Your user has been created successfully.');
        req.session.save(function() {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('error-page.ejs'); 
    };
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('/login/index');
            });
            return;
        };

        req.flash('success', 'You are now logged in');
        req.session.user = login.user;
        req.session.save(function() {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        res.render('error-page.ejs');
    };
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};