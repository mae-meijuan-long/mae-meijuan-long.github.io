const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/',(req,res,next)=>{
        res.render("index");
})

app.post('/result',(req,res,next)=>{

    res.send('welcome, ' + req.body.name + ' the age is '+ req.body.age);
})
app.listen(3000);