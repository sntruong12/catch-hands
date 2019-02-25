var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  fighters: [{
    type: Schema.Types.ObjectId,
    ref: 'Fighter'
  }],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);