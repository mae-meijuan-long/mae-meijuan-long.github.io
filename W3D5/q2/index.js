const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('<form action="/result" method="post"><label>Name </label><input type="text" name="name"/> <label>Age </label><input type="text" name="age"/> <input type="submit" value="Submit Query"/></form>');
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