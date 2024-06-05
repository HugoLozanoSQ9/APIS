const Generations = require('../models/generations.model')

async function create (genData){
   const newGen = await Generations.create(genData)
   return newGen 
}

async function getAll(){
    const allGens = await Generations.find()
    return allGens
}

async function getById(id){
    const generation = await Generations.findById(id)
    return generation
}

async function deleteById(id){
    const genDeleted = await Generations.findByIdAndDelete(id)
    return genDeleted
}

async function updateByID(id,newGenData){
    const generation = await Generations.findByIdAndUpdate(id,newGenData, {new:true})
    return generation
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateByID
}