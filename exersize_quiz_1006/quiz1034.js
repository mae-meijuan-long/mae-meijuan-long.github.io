const express = require('express');
const app = express();

let list = [];

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let output = "<ul>";
  for (i of list) {
      output += `<li>${i}</li>`;
  }
  output += "</ul><a href='/add'>add</href>";
  res.send(output);
});

app.get('/add', (req, res) => {
    res.send(`<form method="post"><input name="item" /><input type="submit" /></form>`);
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);