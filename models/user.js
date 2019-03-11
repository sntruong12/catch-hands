var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  mains: [{
    id: {
      type: Number,
    },
    name: {
      type: String,
      enum: ["Bayonetta", "Bowser", "Bowser Jr.", "Captain Falcon", "Chrom", "Cloud", "Corrin", "Daisy", "Dark Pit", "Dark Samus", "Diddy Kong", "Donkey Kong", "Dr. Mario", "Duck Hunt", "Falco", "Fox", "Ganondorf", "Greninja", "Ice Climbers", "Ike", "Inkling", "Incineroar", "Isabelle", "Jigglypuff", "Joker", "Ken", "King Dedede", "King K. Rool", "Kirby", "Link", "Little Mac", "Lucario", "Lucas", "Lucina", "Luigi", "Mario", "Marth", "Mega Man", "Meta Knight", "Mewtwo", "Mii Brawler", "Mii Gunner", "Mii Fighter", "Mr. Game & Watch", "Ness", "Captain Olimar", "Pac-Man", "Palutena", "Peach", "Pichu", "Pikachu", "Piranha Plant", "Pit", "Pokémon Trainer", "Richter", "Ridley", "R.O.B.", "Robin", "Rosalina", "Roy", "Ryu", "Samus", "Sheik", "Shulk", "Simon", "Snake", "Sonic", "Toon Link", "Villager", "Wario", "Wii Fit Trainer", "Wolf", "Yoshi", "Young Link", "Zelda", "Zero Suit Samus"]
    },
    image_url: {
      type: String,
    },
    stock_icon_url: {
      type: String
    },
    color: {
      type: String
    },
    combos: [String]
  }],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);