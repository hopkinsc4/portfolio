const express = require('express');
let url = require('url');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

// setup view engine (handlebars)
var expressHandlebars = require('express-handlebars');
var hbs = expressHandlebars.create({
    partialsDir: 'views/partials/',
    defaultLayout: 'application'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Routes
app.use('/', (req, res) => {
    res.render('home');
})

// Start Server
let port = 80;
app.listen(port);

module.exports = app;