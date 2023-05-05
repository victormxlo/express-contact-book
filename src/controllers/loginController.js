const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login.ejs');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
    
        await login.register();
    
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('back');
            });
            return;
        };
        
        req.flash('success', 'Your user has been created successfully.');
        req.session.save(() => {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('error-page.ejs'); 
    }
};