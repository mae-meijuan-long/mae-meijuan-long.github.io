const express = require('express');
const path = require("path");

const app = express();
app.set('view engine', 'ejs');

app.locals.arrayList=[];
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render(path.join(path.dirname(process.mainModule.filename),'views', 'list'),{
        list: app.locals.arrayList
    });
});

app.get('/add', (req, res) => {
    res.render(path.join(path.dirname(process.mainModule.filename),'views', 'form'));
});


app.post('/add', (req, res, next) => {
    let item = req.body.item;
    req.app.locals.arrayList.push(item);
    res.redirect('/');
});

app.listen(3000);