require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const diaryroutes = require('./routes/diaryroutes')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/diary', diaryroutes)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('connected to database and listening for requests on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  }) 
