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


module.exports ={
    adddiary
}