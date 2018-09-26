let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db)  {
    if (err)
        throw err;
    
    let dbo = db.db('mydb')
    let close = db.close
    let myobj = [{
        name: 'John',
        address: 'Highway 71'
    },{
        name: 'Peter',
        address: 'Lowstreet 4'
    },{
        name: 'Amy',
        address: 'Apple st 652'
    },{
        name: 'Hannah',
        address: 'Mountain 21'
    },{
        name: 'Michael',
        address: 'Valley 345'
    },{
        name: 'Sandy',
        address: 'Ocean blvd 2'
    },{
        name: 'Betty',
        address: 'Green Grass 1'
    },{
        name: 'Richard',
        address: 'Sky st 331'
    },{
        name: 'Susan',
        address: 'One Way 98'
    },{
        name: 'Vicky',
        address: 'Yellow Garden 2'
    },{
        name: 'Ben',
        address: 'Park Lane 38'
    },{
        anme: 'William',
        address: 'Central st 954'
    },{
        name: 'Chuck',
        address: 'Main Road 989'
    },{
        name: 'Viola',
        address: 'Sideway 1633'
    }]
    dbo.collection("customers").insertMany(myobj, function(err, response){
        if (err)
            throw err;
        
        console.log("Number of documents insertd: " + response.insertedCount)
        db.close();
    })
})