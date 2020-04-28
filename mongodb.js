//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient // help me to get more function for mongodb
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology: true}, (error , client) => {
    if (error){
        return console.log('Unable to connect to database');
        
    }

    const db = client.db(databaseName)
    
    db.collection('tasks').findOne( { _id : new ObjectID("5ea1a7f2b2555641b8b4e4f0")}, (error,task) => {
        if(error) return 'unable to connect the database'
        console.log(task);
        
    })
})