const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

route.get('/', homeController.homeGet);
route.post('/', homeController.homePost);

route.get('/contact/', contactController.contactGet);
route.post('/contact/', contactController.contactPost)

module.exports = route;