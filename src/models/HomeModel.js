const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, reqired: true }
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;