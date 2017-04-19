/*C:\G-A\js-dc-4\13-architecture\exercise\solution
C:\G-A\js-dc-4\12-apis\exercise\exercise3 - Copy
*/
// All our requires/dependencies
var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');


// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://localhost:27017/devTunr');

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
  Artist.find({}, function( err, artistName ) {
      res.render('index', {'currentPG':"home", artistName: artistName, id:'0EmeFodog0BfCgMzAIvKQp' });
    });

});

app.get('/artist/new', function( req, res ) {
    /*  //test template
    res.render('artist-new', {'currentPG':"'artist-new", 'artistName': 'Alissa Leon'});
    */

    Artist.find({}, function( err, artistName ) {
    res.render('artist-new', {'currentPG':'artist-new', artistName: artistName});
    });



})
app.post('/artist/new', function( req, res ) {
//build noew object
  var newArtist = new Artist({
    artistName: req.body.q,
    id: req.body.id
  })

/*  // 1. Make the request to OpenWeatherMap API
var xhr = new XMLHttpRequest(); //i get a 500 error on XMLHttpRequest(), do i need to unstal? https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0ahUKEwjRtOecvarTAhWprVQKHVD4CKcQFgg1MAM&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fxmlhttprequest&usg=AFQjCNHMounoqBkBUVk4Y3P5KonpQawibg
xhr.onreadyseatechange = handleRequest;
xhr.open('GET', 'https://api.spotify.com/v1/search?type=artist&q=' + artistName );

xhr.send(null);

function handleRequest() {
  if ( req.readyState === 4 ) {
    var response = JSON.parse( req.res )
    newArtist = {
        // img: response.images[1].url,
         artistName: res.name,
         //genres: response.genres,
         id: res.id
    }
  }
}
*/

  // save new artist in the DB
newArtist.save()

res.redirect('/')
});



app.get('/artist/edit/:id', function( req , res ) {
// edit artsit detail
/*
Artist.findById( req.params.id, function( err, post ){
  res.render( 'artist-new', { artistName: artistName } )
});
*/
artistID = req.params.id;
/*myArtist = Artist.findById(artistID);
console.log(myArtist);
artistName = myArtist.artistName;

//test template
res.render('artist-edit', {'currentPG':"'artist-edit", 'artistName': artistName, id:artistID});*/


  /*Artist.find().byId(artistID);*/
Artist.findById( artistID, function( err, artistName ){
  //console.log(Artist); http://mongoosejs.com/docs/guide.html
    res.render( 'artist-edit', { 'currentPG':"'artist-edit", 'artistName': Artist[artistName], id:artistID } )

  })

});
app.get('/artist/edit/', function( req , res ) {
//show all artsits
res.redirect('/')
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
