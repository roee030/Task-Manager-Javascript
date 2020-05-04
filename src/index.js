const express = require ('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) =>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send('The user save successfully')
    }catch{
        res.send('Failed to save user')
    }
})


app.get('/users', async (req, res) => {
    try{
        const users = await User.find({})
        if(!users){
            res.send('There is no users to shown')
        }
        res.send(users)
    }catch{
        res.status(500).send()
    }
})


app.get('/users/:id', async(req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            res.send('There is no user with this id')
        }
        res.send(user)
    }catch{
        res.status(500).send('There is no user with this id')
    }
})


app.post('/tasks', async(req, res) =>{
   const task = req.body
   try{
       await Task.save(task)
       res.send('The task save successfully')
   }catch{
       res.status(500).send('Could not save the task')
   }
})


app.get('/tasks' , async (req, res) => {
    try{
        const tasks = await Task.find({})
        if(!tasks){
            res.send('There is no tasks')
        }
        res.send(tasks)
    }catch{
        res.status(500).send('Could not find tasks')
    }

})


app.get('/tasks/:id' , async(req, res) => {
   const id = req.params.id
   try{
       const task = await Task.findById(id)
       if(!task){
           res.send('There is no task with this id')
       }
   }catch{
       res.status(500).send('Could not find task with this id')
   }
})



app.listen(port, () => {
    console.log('server is on port '+ port);
    
})