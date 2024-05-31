//11
require('dotenv').config()

//12
const server = require('./src/server')

//13
const db = require('./src/lib/db')

//14
const PORT = process.env.PORT || 8080

//15
db.connect()
.then(()=>{
    //17
    console.log("DB connected")
    //16
    server.listen(PORT,()=>{
        console.log(`El puerto está corriendo en el puerto ${PORT}`)
    })
})
.catch((error)=>{
    //18
    console.log("DB connection error:", error)
})
