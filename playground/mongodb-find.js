const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'TodosApp';

const client = new MongoClient(url);

client.connect((err, client)=>{
    assert.equal(null,err);
    console.log('Connected to MongoDB');

    const db = client.db(dbname);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c643953a4922966785eb5ba'),
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch', err);
    // });
    
    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos : ');
        console.log(count);
    },(err)=>{
        console.log('Unable to fetch', err);
    });

    //client.close();
});