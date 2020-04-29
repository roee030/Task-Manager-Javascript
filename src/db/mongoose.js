const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:    true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User',{
    name:{
        type: String,
        trim: true,
        require: true
    },
    age:{
        type: Number,
        default: 0,
        validate(value) {
            if( value < 0 ){
                throw new Error ('Age must be a positive number')
            }
        }
    },
    email:{
        type: String,
        require: true,
        lowercase: true,
        trim:  true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error ('Email must be a validate')
            }
        }

    },
    password: {
        type: String,
        require: true,
        trim: true,
        //minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error ("Password cannot contain 'password'")
            }
        }
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

const me = new User({
    name:"    Roee",
    email: "Roeeaa@walla.com",
    age: "24",
    
    password: "  1234564s"
})

me.save().then((result) => {
    console.log(result);
    
}).catch((error) => {
    console.log(error.message);
    
})
