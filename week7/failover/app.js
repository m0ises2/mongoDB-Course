var MongoClient = require('mongodb').MongoClient;
//import {MongoClient} from 'mongodb';

MongoClient.connect("mongodb://localhost:27017", function(err, db) {
    if (err) throw err;

    var documentNumber = 0;
    function insertDocument() {

        db.collection("repl").insert({ 'documentNumber' : documentNumber++ }, function(err, doc) {
            if (err) throw err;
            console.log(`hello`,doc);
        });

        console.log("Dispatched insert");
        setTimeout(insertDocument, 1000);
    }

    insertDocument();
});
