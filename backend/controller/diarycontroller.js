const { request } = require('express')
const diaryrecord=require('../models/diarymodel')
const mongoose = require('mongoose')

//add diary records

const adddiary=async(req, res)=>{
    const {record_title,diary_record}=req.body
    try{
        const diarydata=await diaryrecord.create({record_title,diary_record})
        res.status(200).json(diarydata)


    }catch(error){
        res.status(400).json({ error: error.message })
    }
}
//view all
const getall=async(req,res)=>{
    const getdiarydata=await diaryrecord.find({}).sort({createdAt: -1})
    
    res.status(200).json(getdiarydata)

}

//view By id
const searchRecord=async(req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Data Found'})
    }
    const diaryrecorddata = await diaryrecord.findById(id)

    if (!diaryrecorddata) {
        return res.status(404).json({error: 'No Data Found'})
      
    }

    res.status(200).json(diaryrecorddata)
    
    
}

//Update Record
const updateRecord=async(req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Data Found'})
    }
    const diaryrecorddata = await diaryrecord.findOneAndUpdate({_id:id},{
        ...req.body
    })
    
    const result=res.status(200)
    if(result){

        res.json({msg:'UPDATED'})
    }
    
}

//Delete Record
const deleteRecord=async(req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Data Found'})
    }
    const diaryrecorddata = await diaryrecord.findOneAndDelete({_id:id})

    if (!diaryrecorddata) {
        return res.status(404).json({error: 'No Data Found'})
      
    }

    const result=res.status(200)
    if(result){

        res.json({msg:'deleted'})
    }
    
    
}

module.exports ={
    adddiary,
    getall,
    searchRecord,
    deleteRecord,
    updateRecord
}