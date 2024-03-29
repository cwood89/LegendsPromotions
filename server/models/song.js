const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  artist: {
    type: String,
    required: [true, 'artist is required'],
    trim: true
  },
  id: {
    type: Number,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'song name is required'],
    trim: true
  }
},
  {
    collection: 'songs'
  });

SongSchema.index({
  name: 'text',
  artist: 'text'
}, {
  weights: { artist: 2, name: 1 }
});

const Song = mongoose.model('song', SongSchema, "songs");

module.exports = Song;

