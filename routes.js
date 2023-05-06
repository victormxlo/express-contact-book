const express = require('express');

const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

const middleware = require('./src/middlewares/middleware');

route.get('/', homeController.index);

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

route.get('/contact/index', middleware.loginRequired, contactController.index);
route.post('/contact/register', middleware.loginRequired, contactController.register);
route.get('/contact/index/:id', middleware.loginRequired, contactController.editIndex);
route.post('/contact/edit/:id', middleware.loginRequired, contactController.edit);

module.exports = route;