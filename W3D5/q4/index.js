const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));

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
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`)
})

app.get('/output',(req,res,next)=>{
        let name = req.query.name;
        if (!name) {
           name = "person";
        }
       let age = req.query.age;
       if (!age) {
               age = 0;
       }
       res.send(`Welcome ${name} your age is ${age}`);
})

app.use('/css', express.static(path.join(__dirname, 'css')));

app.listen(3000);