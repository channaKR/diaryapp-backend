const express=require('express')

const diaryroutes=express.Router()
// routes
diaryroutes.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the Diary'})
  })
  
  diaryroutes.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single record'})
  })


  // POST a Diary Record
  diaryroutes.post('/', (req, res) => {
    res.json({mssg: 'POST a new record'})
  })
  
  // DELETE  Diary Record
  diaryroutes.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a record'})
  })
  
  // UPDATE a workout
  diaryroutes.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a record'})
  })

module.exports =diaryroutes