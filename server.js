const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();
app.set('view engine', "ejs");
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact', {email: 'brandonblack02@gmail.com', twitter: 'https://twitter.com/brandonblack02', linkedIn: 'https://www.linkedin.com/in/brandon-b-757706b3/'});
});

app.get('/skills', function(req, res) {
    res.render('skills', {skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express']});
});

app.listen(3000);