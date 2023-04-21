const express=require('express')
const {adddiary,getall,searchRecord,deleteRecord,updateRecord}=require('../controller/diarycontroller')
const diaryroutes=express.Router()
// routes
diaryroutes.get('/', getall)
  
  diaryroutes.get('/:id',searchRecord)


  // POST a Diary Record
  diaryroutes.post('/', adddiary)
  
  // DELETE  Diary Record
  diaryroutes.delete('/:id',deleteRecord)
  
  // UPDATE a Record
  diaryroutes.patch('/:id', updateRecord)

module.exports =diaryroutes