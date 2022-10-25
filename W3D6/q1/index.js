const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {

        const date = new Date();
        const hour = date.getHours();
        let cssStyle = 'night.css'

          //Between 6am and 6pm the server
         if(hour>6 && hour<18){
                  cssStyle = 'day.css';
         }
         res.render("q1", {
            cssStyle: cssStyle,
         });

});
app.use('/css', express.static(path.join(__dirname, 'css')));

app.listen(3000);