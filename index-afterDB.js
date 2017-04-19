// All our requires/dependencies
var express = require('express');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Creating our Application
var app = express();

// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://localhost:27017/Tunr');

var Artsit = require('./models/artist');
var Song = require('./models/song');




// Routes
// Serving static files (like css)
app.use(express.static('public'));

// application routes (i.e. controller)
app.get('/', function( req , res ) {
   /* test template*/
res.render('index', {'currentPG':"home", 'artistName': 'Alissa Leon', 'artistID': 0});
// list artists
});

app.get('/artist/new', function( req , res ) {
// create new artsit
});
app.get('/artist/edit/:id', function( req , res ) {
// edit artsit detail
});
app.get('/artist/:id', function( req , res ) {
// show artsit detail
});

app.get('/song/edit/:id', function( req , res ) {
// edit song detail
});
app.get('/song/:id', function( req , res ) {
// show artsit detail
});

app.listen( 3000, function() {

  console.log( 'listening on 3000' )

})
