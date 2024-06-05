//23
const kodersModel = require('../models/koders.model')
const Koders = require('../models/koders.model')
const createError = require('http-errors')
const encrypt = require("../lib/encrypt")

//24
async function create(koderData){
    //30 Koders.create va a retornar una promesa por lo que se tiene que definir como asincrona
    //si no simplemente tendré que ponerle el .then().catch() el problema es que no se puede retorar el resultado
    const koderFound = await kodersModel.findOne({email:koderData.email})//1.1 Validaciones ver la rama anterior para ver los cambios

    if(koderFound)throw createError(409, "Email alredy in use")

    const password = await encrypt.encrypt(koderData.password)

    koderData.password = password

    const newKoder = await Koders.create(koderData)
    return newKoder
}

//25
async function getAll(){
    //31  Trae toda la lista de koders, también trae una promesa 
    const allKoders = await Koders.find()
    return allKoders
}

//26
async function getById(id){
    //32 Trae el koder por el id
    const koder = await Koders.findById(id)
    return koder
}

//27
async function deleteById(id){
    //33
    const koderDeleted = await Koders.findByIdAndDelete(id)
    if(!koderDeleted) throw new Error('Koder does not exists') //validación agregada hast el ultimo
    return koderDeleted
}
//28
async function updateByID(id,newKoderData){
    //34
    const updatedKoder = await Koders.findByIdAndUpdate(id,newKoderData, {new:true})
    return updatedKoder

}

//29
module.exports = {
    create,
    getAll,
    deleteById,
    getById,
    updateByID
}