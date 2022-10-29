const express = require('express');
const session = require('express-session');
const path = require("path");

const app = express();
app.use(session({secret: 'secretsalt'}));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render(path.join(path.dirname(process.mainModule.filename),'views', 'list'),{
        list: req.session.arrayList
    });
});

app.get('/add', (req, res) => {
    res.render(path.join(path.dirname(process.mainModule.filename),'views', 'form'));
});


app.post('/add', (req, res, next) => {
    let item = req.body.item;
    if(!req.session.arrayList){
        req.session.arrayList=[];
    }
    req.session.arrayList.push(item);
    res.redirect('/');
});

app.listen(3000);