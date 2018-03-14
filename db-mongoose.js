var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/myapp_db');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected.'); 
});

//Define a schema
var Schema = mongoose.Schema;

var Schema = new Schema({
    fname: String,
    lname: String,
});

// Compile model from schema
var profile = mongoose.model('profile', Schema );

// Create an instance of model SomeModel
var profile_instance = new profile({ fname: 'TATHAGATA'});

// Save the new model instance, passing a callback
profile_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
