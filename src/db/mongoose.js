const mongoose = require('mongoose')
var validator = require('validator');

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
                throw new Error ('Email is invalid')
            }
        }

    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error ("Password cannot contain 'password'")
            }
        }
    }
})

const Task = mongoose.model('Task',{
    description:{
        type: String,
        require: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const user = new User({
    name:"    Roee",
    age: "24",
    email: "Roe@gamil.com",
    password: "  1234564s"
})

user.save().then((result) => {
    console.log(result);
    
}).catch((error) => {
    console.log(error.message);
    
})
