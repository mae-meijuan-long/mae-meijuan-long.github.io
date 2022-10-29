const express = require('express');
const app = express();
app.locals.arrayList=[];
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let items='';
    req.app.locals.arrayList.forEach((e)=>{
        items+='<li>'+e+'</li>';
    });
    res.send('<ul>'+items+'</ul><br><a href="/add">add</a>');
});

app.get('/add', (req, res) => {
    res.send('<form action="/add" method="post"><input type="text" name="item"/><input type="submit"/></form>');
});


app.post('/add', (req, res, next) => {
    let item = req.body.item;
    req.app.locals.arrayList.push(item);
    res.redirect('/');
});

app.listen(3000);