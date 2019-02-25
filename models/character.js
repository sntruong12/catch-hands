var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var characterSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
  
}, {
  timestamps: true
});

module.exports = mongoose.model('character', characterSchema);