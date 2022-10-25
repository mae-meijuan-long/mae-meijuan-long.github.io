const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));
const session = require('express-session');
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'someBigSecret',
    resave: true,
    saveUninitialized: true
})); //

app.get('/',(req,res,next)=>{
    const date = new Date();
    const hour = date.getHours();
    let csslinktag  = '<link  href="/css/night.css" rel="stylesheet" />';
    console.log("current hour=>"+hour);
    //Between 6am and 6pm the server
    if(hour>6 && hour<18){
          csslinktag = '<link  href="/css/day.css" rel="stylesheet" />';
    }

    res.send('<!DOCTYPE html>'+
              '<html lang="en">'+
              '<head>'+
                  '<meta charset="UTF-8">'+
                  '<title>Title</title>'+
                  csslinktag+
              '</head>'+
              '<body>'+
              '<form action="/result" method="post">Name <input name="name"> Age <input name="age"><button type="submit">Submit Query</button></form>'+
              '</body>'+
              '</html>')
})

app.post('/result',(req,res,next)=>{
//    res.send('welcome, ' + req.body.name + ' the age is '+ req.body.age);
    console.log("req.body.name"+req.body.name);
    console.log("req.body.age"+req.body.age);
    req.session.age = req.body.age;
    req.session.name = req.body.name;

//    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`)
    res.redirect(`/output`)
})

app.get('/output',(req,res,next)=>{
        let name = req.session.name;
        if (!name) {
           name = "person";
        }
       let age = req.session.age;
       if (!age) {
               age = 0;
       }

       res.send(`Welcome ${name} your age is ${age}`);
})

app.use('/css', express.static(path.join(__dirname, 'css')));

app.listen(3000);