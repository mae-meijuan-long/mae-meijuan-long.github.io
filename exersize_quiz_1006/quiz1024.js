const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
console.log("path==>"+path.join(__dirname, "ejs"));
app.set('views', path.join(__dirname, "ejs"));


let list = [];
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
   res.render("list", {
      list: list,
   });
});
app.get('/add', (req, res) => {
    res.render("add");
});
app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);