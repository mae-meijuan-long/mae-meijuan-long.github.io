const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    res.send('<form action="/result" method="post">Name <input name="name"> Age <input name="age"><button type="submit">Submit Query</button></form>')
})

app.post('/result',(req,res,next)=>{
    res.send('welcome, ' + req.body.name + ' the age is '+ req.body.age);
})


//app.get('/', (req, res) => {
//     let name = req.query.name;
//     if (!name) {
//        name = "person";
//     }
//
//    let age = req.query.age;
//    if (!age) {
//            age = 0;
//    }
//
//     res.send(`Welcome ${name} your age is ${age}`);
//
//
//});
app.listen(3000);