//6
const express = require('express')

//7
const app = express()

//8
app.use(express.json()) //por que va a procesar JSON

//9
app.get('/', (req,res)=>{
    res.json({
        message:'KODERS APIv1'
    })
})

//10
module.exports = app