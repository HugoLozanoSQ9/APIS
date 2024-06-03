//19
const mongoose = require('mongoose')

//20
const modelName = 'Mentors'

//21 
const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    },
    password:{
        type: String,
        required: true,
    },
    generation: {
        type: Number,
        min: 1,
        max: 100,
        required: false,
    },
    createdAd:{
        type: Date,
        default:Date.now

    },
    bootcampName:{
        type:String,
        required:false,
        maxLength:100
    }
})

//22
module.exports =  mongoose.model(modelName, schema)