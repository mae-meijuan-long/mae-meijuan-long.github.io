const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "ejs"));
const session = require('express-session');
let prdList = ["head phone","lip stick","eye line"];
let head_phone={color:"pink",price:"20",name:"head phone"};
let lip_stick={color:"red",price:"10",name:"lip stick"};
let eye_line={color:"black",price:"1",name:"eye line"};
let prdListDesc = [head_phone,lip_stick,eye_line];
app.use(session({
    secret: 'maes secret',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    next();
});
app.get('/', (req, res, next) => {
                    res.render('welcome',{prdList:prdList});
                });

app.get('/product', (req, res, next) => {
                    let prd = prdListDesc[req.query.prodId];
                    res.render('product',{prd:prd});
                });


app.post('/addToCart', (req, res,next) => {
                let isAlreadyHave = req.session.cart[req.body.name]
                if(isAlreadyHave){
                        isAlreadyHave.qualities += 1;
                         req.session.cart[req.body.name] = isAlreadyHave;
                }else{
                    req.session.cart[req.body.name] = {
                        name:req.body.name,
                        color:req.body.color,
                        price:req.body.price,
                        qualities:1
                    }
                }
                for (const [key, value] of  Object.entries(req.session.cart)) {
                    console.log("keys===>"+key);
                    console.log("values==>"+value.qualities);
                }
                res.send(200,Object.keys(req.session.cart).length)
//                               .render('shop',{cart:req.session.cart});
//                res.render('shop',{cart:req.session.cart});
         });


app.listen(3000);
