let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, res){
    if (err)
    throw err;
    let dbo = res.db('mydb');
    let myObj = {
        name: "Company Inc",
        address: "Highway 37"
    }
    dbo.collection("customers").insertOne(myObj, function(err, res){        
        if (err) throw err;
        console.log("1 document inserted")
        db.close()
    })
})