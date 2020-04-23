//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient // help me to get more function for mongodb

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology: true}, (error , client) => {
    if (error){
        return console.log('Unable to connect to database');
        
    }

    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Roee',
        age:"26"
    })
    
    
})

