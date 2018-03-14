var mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myapp_db");
  dbo.collection("profiles").update({fname:"Sourav"},{$unset:{"age":1}}, function(err, res) {
    if (err) throw err;
    console.log("1 document UPDATE");
    db.close();
  });
//  dbo.collection("profiles").update({fname:"tathagata"},{$set:{fname:"sss"}}, );
  
}); 

//db.profiles.remove({fname:"tathagata"});
//db.profiles.update({fname:"Sourav"},{$unset:{"age":1}}
//db.myapp_db.find({lname:{$exists:true}}) --  check if column exists
//db.profiles.find({$or:[{fname:"sourav"}, {fname:"ayansh"}]})
//db.profiles.find({},{_id:0})
//db.profiles.update( {fname: "vikram"}, {fname: "vikram", lname: "bansal", age:37}, {upsert: true} ) --- merge
//db.myapp_db.update({fname:"ajay"},{$set:{age:34}}) - if age does not exist age column is created
//db.students.update( { _id: 1 }, { $push: { scores: { $each: [ { attempt: 4, score: 17 }, { attempt: 5, score: 4 } ], $sort: { score: 1 }, $slice: -3 } } } )
