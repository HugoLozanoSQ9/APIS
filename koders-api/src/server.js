//6
const express = require('express')

//60
const kodersRouter = require ('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')
const authRouter = require('./routes/auth.router')
const generation = require('./routes/generation.router')
//7
const app = express()

//8
app.use(express.json()) //por que va a procesar JSON

//61
app.use('/koders',kodersRouter) //se coloca abajodel 8 

app.use('/mentors',mentorsRouter)

app.use('/auth',authRouter)

app.use('/gen',generation)
//9
app.get('/', (req,res)=>{
    res.json({
        message:'KODERS APIv1'
    })
})

//10
module.exports = app