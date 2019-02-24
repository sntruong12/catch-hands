var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
  {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on('connected', () => {
  console.log(`Database connected at ${process.env.DATABASE_URL}`)
})