const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    let product = {
        id: 1,
        name: "Orange Juice",
        description: "sugar free orange juice ",
        price: 8.00
    };

    res.render('product', { product });
});
router.get('/', (req, res, next) => {
    let product = {
        id: 2,
        name: "Apple Jiuce",
        description: "sugar free Apple juice",
        price: 7.00
    };
    res.render('product', { product });
});

router.get('/', (req, res, next) => {
    let product = {
        id: 3,
        name: "pinnaple",
        description: "sugar free pinnaple Juice",
        price: 6.00
    };

    res.render('product', { product });
});

module.exports = router;