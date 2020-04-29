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

const me = new User({
    name: "Roee",
    age: 18
})

me.save().then((result) => {
    console.log(me, result);
    
}).catch((error) => {
    console.log(error);
    
})
