const express = require('express')
const app = express()
const port = 3000
const testData = require('./lib/data.js');


// Import Routes
const baseRouter = require('./routes/base');
const staffRouter = require('./routes/staff');

// Cookies 
const cookieParser = require('cookie-parser');
app.use(cookieParser("Ben is a God!!"));

// need this before you can use req.body
app.use(express.urlencoded({ extended: true })) 

// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/',baseRouter);
app.use('/staff',staffRouter);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/',  (req, res) => {
    res.type('text/plain');
    res.send('Covid Holiday Tours');
});

app.get('/about',  (req, res) => {
    res.type('text/plain');
    res.send('About Our Holidays');
});

app.get('/contact',  (req, res) => {
    res.type('text/plain');
    res.send('Dont bother we never reply');
});

// Custom 404 page
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});



app.get('/', (req, res) => res.send('Hello World from Ben!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
