const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'TodosApp';

const client = new MongoClient(url);

client.connect((err, client)=>{
    assert.equal(null,err);
    console.log('Connected to MongoDB');

    const db = client.db(dbname);
    //deleteMany, deleteOne, findOneAndDelete

    // db.collection('Todos').deleteMany({text:"Something todo"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:"Something todo"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed:false}).then((docs) => {
        console.log(docs);
    });
    
    //client.close();
});