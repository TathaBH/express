var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/myapp_db');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected.'); 
});

//Define a schema
var Schema = mongoose.Schema;

var myapp_db_Schema = new Schema({
    a_string: String,
    b_string: String,
    a_date: Date
});

// Compile model from schema
var myapp_db_Model = mongoose.model('myapp_db_Model', myapp_db_Schema );

// Create an instance of model SomeModel
var myapp_db_instance = new myapp_db_Model({ a_string: 'TATHAGATA' });

// Save the new model instance, passing a callback
myapp_db_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
