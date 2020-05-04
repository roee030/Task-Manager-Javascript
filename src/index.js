const express = require ('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) =>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.send('Success to save user')
    }).catch(()=>{
        res.send('Failed to save user')
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) =>{
        res.send(users)
    }).catch((e)=>{
        res.send(e)
    })
})


app.get('/users/:id', (req, res) => {
   const _id = req.params.id
   User.findById(_id).then((user) => {
       if(!user) return res.send('There is no user with id '+ _id)
       res.send(user)
   }).catch((e) =>{
       return res.send(e)
   })
})

app.post('/tasks', (req, res) =>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.send('Success to save task')
    }).catch(() => {
        res.send('Failed to save task')
    })
})


app.get('/tasks' , (req, res) => {
    Task.find({}).then((task) =>{
        res.send(task)
    }).catch((e) => {
        res.send(e)
    })
})

app.get('/tasks/:id' , (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if(!task) return res.send('There is no task with this id')
        res.send(task)
    }).catch((e) => {
        return res.send('There is no task with this id')
    })
})

app.listen(port, () => {
    console.log('server is on port '+ port);
    
})