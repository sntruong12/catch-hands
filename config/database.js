var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/catch-hands',
  {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on('connected', () => {
  console.log(`Database connected at ${db.host}:${db.port}`)
})