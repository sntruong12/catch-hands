var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var characterApiSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  debut: {
    type: Number,
    required: true
  },
  series: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('characterApi', characterApiSchema);