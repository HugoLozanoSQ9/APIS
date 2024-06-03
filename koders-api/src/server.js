//6
const express = require('express')

//60
const kodersRouter = require ('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')
//7
const app = express()

//8
app.use(express.json()) //por que va a procesar JSON

//61
app.use('/koders',kodersRouter) //se coloca abajodel 8 

app.use('/mentors',mentorsRouter)

//9
app.get('/', (req,res)=>{
    res.json({
        message:'KODERS APIv1'
    })
})

//10
module.exports = app