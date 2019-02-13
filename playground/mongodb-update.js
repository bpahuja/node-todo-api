const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'TodosApp';

const client = new MongoClient(url);

client.connect((err, client)=>{
    assert.equal(null,err);
    console.log('Connected to MongoDB');

    const db = client.db(dbname);
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5c643980ae7bf44109d6153a"),
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((resut)=>{
        console.log(resut);
    });
    
    //client.close();
});