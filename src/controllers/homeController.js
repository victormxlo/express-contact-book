const Contact = require('../models/ContactModel');

exports.index = async (req, res) => {
    const contacts = await Contact.contactQuery();
    res.render('index.ejs', { contacts });
};
