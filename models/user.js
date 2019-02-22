var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  characters: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);