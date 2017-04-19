/*C:\G-A\js-dc-4\13-architecture\exercise\solution
C:\G-A\js-dc-4\12-apis\exercise\exercise3 - Copy
*/
// All our requires/dependencies
var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');

// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://localhost:27017/Tunr');

var Artist = require('./models/artist');
var Song = require('./models/song');

// Creating our Application
var app = express();

// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Serving static files (like css)
app.use(express.static('public'))

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

/* **********
 Routes
 ********** */

// application routes (i.e. controller)
app.get('/', function( req , res ) {
/*  //test template
  res.render('index', {'currentPG':"home", 'artistName': 'Alissa Leon', 'artistID': 0});
*/
   // list artists
  Artist.find({}, function( err, artist ) {
      res.render('index', { artist: artist });
    });

});

app.get('/artist/new', function( req, res ) {
/*  //test template
  res.render('artist-new', {'currentPG':"'artist-new", 'artistName': 'Alissa Leon'});
*/

// render template for creating a new artist
res.render('artist-new');

})
app.post('/artist/new', function( req, res ) {


//build noew object
  var newArtist = new Artist({
    artistName: req.body.q,
  })

  // update #searchResponse
var searchForm = window.document.querySelector('input#js-submitNewArtist')

/*  // save new artist in the DB
newArtist.save()
*/



//res.redirect('/')
});
app.get('/artist/edit/:id', function( req , res ) {
// edit artsit detail
/*
Artist.findById( req.params.id, function( err, post ){
  res.render( 'artist-new', { artistName: artistName } )
});
*/
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
