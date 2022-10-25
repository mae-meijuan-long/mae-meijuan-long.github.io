const express = require('express');

const router = express.Router();

router.get('/shoppingCart', (req, res, next) => {
    const product = req.session.cart;
    res.render('shoppingCart', { product });

});

router.post('/addToCart', (req, res, next) => {
        req.session.cart[req.body.name] = {
            name: req.body.name,
            quantity: 1,
            price: req.body.price,
            description: req.body.description,
        };

    const product = req.session.cart;
    req.session.cart[req.body.name].quantity += 1;
    res.render('shoppingCart', { product });
});

module.exports = router;