//Archivo para conectarnos a cualquier base de datos
//1
const mongoose = require('mongoose')

//2
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME}=process.env

//3
const URI=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=kodemia`

//4
function connect(){
    //regresa una promesa
    return mongoose.connect(URI)
}

//5
module.exports={connect}
