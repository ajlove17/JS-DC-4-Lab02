/*C:\G-A\js-dc-4\13-architecture\exercise\solution
C:\G-A\js-dc-4\12-apis\exercise\exercise3 - Copy
*/
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

// Serving static files (like css)
app.use(express.static('public'));

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://localhost:27017/Tunr');



var Artist = require('./models/artist');
var Song = require('./models/song');

//Connect to API to get the data to stor in the database?


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

app.get('/artist/new', function( req , res ) {
// view to create new artsit
/*  //test template
  res.render('artist-new', {'currentPG':"'artist-new", 'artistName': 'Alissa Leon'});
*/
res.render('artist-new');


  /*  var searchForm = document.querySelector('input#js-submitNewArtist')
  searchForm.addEventListener('submit', function( e ) {
    e.preventDefault()

    // Get the values enetered by the user
      var query = document.querySelector('input[name="q"]').value

      //open(method, url, async)
      var xhr = new XMLHttpRequest();

  //Connect to API to get spotify data
  xhr.onreadyseatechange = handleRequest;
  xhr.open('GET', 'https://api.spotify.com/v1/search?q=' + query + '&type=artist" -H "Accept: application/json" -H "Authorization: Bearer BQAnbAhKhr991btN5pMuzvj9dJemfhC9WIorZBTTwqyPXLPxxwnyXIxESd-2T1igrIt59bVlq2gPB0QncMi2yeS2-Vs9VBwvu8ZuyNbTaWtOyQgNLXcA2Lce8vzCzHyF6FT9gzQ8-ItQWUgu5p4L"');

  xhr.send(null)

  function handleRequest() {
   if ( xhr.readyState === 4 ) {
     var response = JSON.parse( xhr.response )
     newArtist = {
       img: response.images[1].url,
       artistName: response.name,
       genres: response.genres,
       id: response.id
     }
   }
  }

  // create renderArtists();
})*/
});
app.post('/artist/new', function( req , res ) {
  /*var searchForm = document.querySelector('#js-submitNewArtist')
  searchForm.addEventListener('submit', function( e ) {
      e.preventDefault();

    // Get the values enetered by the user
        var query = document.querySelector('input[name="q"]').value;
  });*/

  // create a new artist in the DB

  var newArtist = new Artist({
    img: response.images[1].url,
    artistName: response.name,
    genres: response.genres,
    id: response.id
  })

    newArtist.save()
    console.log("done");
    res.redirect('/')



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
