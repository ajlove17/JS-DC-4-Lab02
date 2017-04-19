var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
  img: String,
  artistName: String,
  id: String,
  description: String,
  genres: Array,
  albums: Array,
  songs: Array
});

var Artist = mongoose.model( 'Artist', artistSchema );

module.exports = Artist;
