const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.post('/add',(req,res)=>{
    let key = req.body.key;
    let value = req.body.value;
    res.cookie(key,value);
    res.redirect('back');
})

app.get('/',(req,res)=>{

    res.render('index',{cookies:req.cookies});
})

app.listen(3000);