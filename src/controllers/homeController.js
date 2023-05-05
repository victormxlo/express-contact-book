const HomeModel = require('../models/HomeModel');

module.exports.homeGet = (req, res) => {
    res.render('index.ejs', {
        title: 'Home | [GET]',
        formData: 'Client name'
    });
};

module.exports.homePost = (req, res) => {
    res.send("Token: " + req.body._csrf);
    console.log("Token: " + req.body._csrf);
};