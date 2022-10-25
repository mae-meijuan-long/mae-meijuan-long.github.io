const Item = require('./itmes');

exports.getAddItems = (req, res, next) => {
    res.render('add', { pageTitle: 'Add Item', path: '/admin/addproduct', formsCSS: true, productCSS: true, activeAddProduct: true });
};

exports.saveProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const prod = new Items(req.body.title);
    prod.save();
    res.redirect('/');
};
exports.getAllProduct = (req, res, next) => {
res.render('shop', { prods: Product.getAll(), pageTitle: 'Shop', path: '/', formsCSS: true, p
roductCSS: true, activeShop: true });
};