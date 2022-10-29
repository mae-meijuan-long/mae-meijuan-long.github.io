const express = require('express');
const app = express();
const path = require('path');
const rootDir = require('./util/path');

app.use(express.urlencoded({ extended: false }));

const date = new Date();
const hour = date.getHours();
app.use('/css/stylesheet.css', express.static(path.join(rootDir, 'public','css',  (hour > 6 && hour < 18) ? 'day.css' : 'night.css' )));

app.get('/', (req, res) => {
    res.sendFile(path.join(rootDir,'resources','views', 'form.html'));
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age=req.body.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age=0;
    }
    res.send(`Welcome ${name}, ${age} years old!`);
});
app.listen(3000);