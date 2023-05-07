require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database connected');
        app.emit('database-connected');
    })
    .catch(e => {
        console.log('Failed to connect database');
        console.log(e);
    });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');

const helmet = require('helmet');
const csrf = require('csurf');

const middleware = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'taxi-driver',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('views engine', 'ejs');

app.use(csrf());

app.use(middleware.global);
app.use(middleware.CSRFErrorChecker);
app.use(middleware.CSRFToken);

app.use(routes);

app.on('database-connected', () => {
    app.listen(4000, () => {
        console.log('Server running at http://localhost:4000');
    });
});