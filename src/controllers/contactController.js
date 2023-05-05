module.exports.contactGet = (req, res) => {
    res.render('contact.ejs', {
        title: 'Contact | [GET]'
    });
};

module.exports.contactPost = (req, res) => {
    res.send("Token: " + req.body._csrf);
    console.log("Token: " + req.body._csrf);
};