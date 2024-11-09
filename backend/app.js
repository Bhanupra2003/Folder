const express = require('express')
const mongoose = require('mongoose')
const UserRouter = require('./routes/userRouter')
const app = express()
const PORT = 8000

mongoose.connect('mongodb://localhost:27017/khit_demo')
.then(()=>{
    console.log('Connection established')
})
.catch((err)=>{
    console.log('error connecting to mongoDB: ',err.message)
})

app.use(express.json())

app.use(UserRouter)

app.listen(PORT,()=>{
    console.log(`App is being served at port ${PORT}`)

})