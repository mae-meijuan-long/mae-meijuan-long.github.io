const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "ejs"));

let prdList = ["head phone","lip stick","eye line"];
let head_phone={color:"pink",price:"20",name:"head phone"};
let lip_stick={color:"red",price:"10",name:"lip stick"};
let eye_line={color:"black",price:"1",name:"eye line"};
let prdListDesc = [head_phone,lip_stick,eye_line];

const map1 = new Map();
map1.set(head_phone,0);
map1.set(lip_stick,0);
map1.set(eye_line,0);


app.get('/', (req, res, next) => {
                    res.render('welcome',{prdList:prdList});
                });

app.get('/product', (req, res, next) => {
                    console.log(req.query.prodId);
                    let prd = prdListDesc[req.query.prodId];
                    res.render('product',{prd:prd});
                });


app.post('/addToCart', (req, res,next) => {
                console.log(req.body.name);
                map1.get(req.body.name)

                if(req.body.name=="head phone"){
                   map1.set(head_phone,map1.get( head_phone)+1);
                }else if(req.body.name=="lip stick"){
                      map1.set(lip_stick,map1.get( lip_stick)+1);
                }else{
                     map1.set(eye_line,map1.get( eye_line)+1);
                }
                res.render('shop',{map1:map1});
         });


app.listen(3000);
