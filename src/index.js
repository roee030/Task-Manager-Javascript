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
        res.status(201).send(user, 'The user save successfully')
    }catch{
        res.status(400).send(e, 'Failed to save user')
    }
})


app.get('/users', async (req, res) => {
    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
})


app.get('/users/:id', async(req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.send('There is no user with this id')
        }
        res.send(user)
    }catch(e){
        res.status(500).send('There is no user with this id')
    }
})


app.post('/tasks', async(req, res) =>{
   const task = req.body
   try{
       await Task.save(task)
       res.send(task, 'The task save successfully')
   }catch(e){
       res.status(400).send(e, 'Could not save the task')
   }
})


app.get('/tasks' , async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send('Could not find tasks')
    }

})


app.get('/tasks/:id' , async(req, res) => {
   const id = req.params.id
   try{
       const task = await Task.findById(id)
       if(!task){
           return res.send('There is no task with this id')
       }
   }catch{
       res.status(500).send('Could not find task with this id')
   }
})



app.listen(port, () => {
    console.log('server is on port '+ port);
    
})