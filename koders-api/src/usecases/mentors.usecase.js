const Mentors = require('../models/mentors.model')

async function create (MentorData){
   const newMentor = await Mentors.create(MentorData)
   return newMentor 
}

async function getAll(){
    const allMentors = await Mentors.find()
    return allMentors
}

async function getById(id){
    const mentor = await Mentors.findById(id)
    return mentor
}

async function deleteById(id){
    const mentorDeleted = await Mentors.findByIdAndDelete(id)
    return mentorDeleted
}

async function updateByID(id,newMentorData){
    const mentor = await Mentors.findByIdAndUpdate(id,newMentorData, {new:true})
    return mentor
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateByID
}