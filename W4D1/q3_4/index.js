const express = require('express');
const path = require('path');
const session = require('express-session');

const shoppingcart = require('./shoppingCart');
const product = require('./product');

const app = express();
app.use(session({ secret: 'extraLongSaltingSecretForSession',
resave: false,
saveUninitialized: false }));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    };
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(product);

app.use(shoppingcart);

app.listen(3000);