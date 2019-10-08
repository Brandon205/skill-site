const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();
app.set('view engine', "ejs");
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact', {});
});

app.get('/skills', function(req, res) {
    res.render('skills', {});
})

app.listen(3000);