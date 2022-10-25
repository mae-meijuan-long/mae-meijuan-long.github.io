const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "ejs"));
const session = require('express-session');
app.use(session({
    secret: 'someBigSecret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    if(!req.session.list){
           req.session.list = [];
      }
    next();
});

app.get('/', (req, res) => {
   res.render("list", {
      list: req.session.list,
   });
});
app.get('/add', (req, res) => {
    res.render("add");
});
app.post('/add', (req, res) => {
    req.session.list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);