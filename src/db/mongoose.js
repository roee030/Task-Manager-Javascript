const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:    true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User',{
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const Task = mongoose.model('Task',{
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

const me = new Task({
    description: "play cod",
    completed: false
})

me.save().then((result) => {
    console.log(result);
    
}).catch((error) => {
    console.log(error);
    
})