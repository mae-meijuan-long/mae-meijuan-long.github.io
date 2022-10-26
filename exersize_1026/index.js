const express = require('express');
const path = require('path');
const app= express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));
app.use('/css', express.static(path.join(__dirname, 'view', 'css')));

const session = require('express-session');

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'my super secrit secret',
    resave: false,
    saveUninitialized: true
}));


app.get("/",(req, res)=>
{
    res.render("index");
});

app.get("/computers",(req,res)=>{

    let id = req.query.id;
    console.log("id==>"+req.query.id);
    res.send(200,{
                     "cpu": "8 core 4Ghz",
                     "ram": "16GB",
                     "storage": "4TB NVME",
                     "price": "$1500"
                 });
})

app.get("/",(req,res)=>{
    if(!req.session.name){
        res.redirect("/login");
    }else{
        res.send(`welcome ${req.session.name}`)
    }
})

app.get("/login",(req,res)=>{
   res.render("login");
})

app.post("/login",(req,res)=>{
    let name = req.body.name;
     if(name){
        req.session.name =name;
     }else{
          res.render("login");
     }
})

app.get("/logout", (req, res)=> {
    req.session.destroy();
    res.send("You have been logged out");
});
app.listen(3000);