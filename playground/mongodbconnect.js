const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'TodosApp';

const client = new MongoClient(url);

client.connect((err, client)=>{
    assert.equal(null,err);
    console.log('Connected to MongoDB');

    const db = client.db(dbname);

    db.collection('Todos').insertOne({
        text:'Something todo',
        completed: false
    },(err, result)=>{
        assert.equal(null,err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    // Insert new doc in ?Users

    db.collection('Users').insertOne({
        name:'Bhavay',
        age:20,
        location : 'India'
    },(err, result)=>{
        assert.equal(null,err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});