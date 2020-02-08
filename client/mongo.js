var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

export default class Mongo {
    static insert(name, socketid) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { name: name, id: socketid };
            dbo.collection("users").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
        });
    }

    static get(name) {
      var out = null;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { name: name };
        dbo.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          out = result;
          db.close();
        });
      });
      return out
    }
}