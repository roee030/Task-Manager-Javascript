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
    
    db.collection('tasks').insertMany(
        [{
            description: "finish the nodejs course",
            complete: false
        },{
            description: "play call of duty",
            complete: true
        }
        ], (error, result) => {
            if( error) return 'could not insert the tasks you want to insert '
            console.log(result.ops);
            
        })
 
})

