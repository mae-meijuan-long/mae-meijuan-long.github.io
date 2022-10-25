const express = require('express');
const app = express();
app.get('/', (req, res) => {
     let name = req.query.name;
     if (!name) {
        name = "person";
     }

    let age = req.query.age;
    if (!age) {
            age = 0;
    }

     res.send(`Welcome ${name} your age is ${age}`);


});
app.listen(3000);