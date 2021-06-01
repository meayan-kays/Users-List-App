const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

//Install and Setup mongoose and connect to Database
const connectDB = require('./config/connect')
connectDB()


app.use(express.json())

app.use('/users', require('./Routes/users'))

app.listen(port, () => {
    console.log(`App Listening and Running on ${port}`)
})