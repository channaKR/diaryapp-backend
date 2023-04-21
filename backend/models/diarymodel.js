const mongoose = require('mongoose');

const Schema=mongoose.Schema
const diary_schema=new mongoose.Schema({
    record_title:{
        type : String,
        required: true
    },

    diary_record:{
        type : String,
        required: true

    }


},{timestamps: false},{ versionKey: false })


module.exports=mongoose.model('diaryrecords',diary_schema)