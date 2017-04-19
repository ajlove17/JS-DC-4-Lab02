var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  artist: String,
  title: String,
  description: String,
  album: Array
});

var Song = mongoose.model( 'Song', songSchema );

module.exports = Song;
