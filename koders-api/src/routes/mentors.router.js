const mentorsUsecase = require('../usecases/mentors.usecase')

const express = require('express')

const router = express.Router()

router.get('/',async(req,res)=>{
    try {

        const mentors = await mentorsUsecase.getAll() 
        
        res.json({
            success:true,
            data:{
                mentors
            }
        })

    } catch (error) { 
        res.status(error.status || 500)
        res.json({
            seuccess:false,
            error: error.message
        })
    }
})

router.post('/',async(req,res)=>{
    try {
        const mentorPosted = await mentorsUsecase.create(req.body)
        res.json({
            success:true,
            data:{
                mentor:mentorPosted
            }
        })
    } catch (error) {
        
    }
})

router.get('/:id',async (req,res)=>{
    try {

        const {id} = req.params
        
        const mentor = await mentorsUsecase.getById(id) //ismpre es importante ponerse encima de la función para saber si es una promesa o no 
        
        res.json({
            success:true,
            data:{
                mentor
            }
        })
    } catch (error) { 
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        
        const {id} = req.params
        
        const mentorDeleted = await mentorsUsecase.deleteById(id)
        
        res.json({
            success:true,
            data:{
                mentor: mentorDeleted
            }
        })

    } catch (error) {
        //52
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        
        const {id} = req.params
        
        const mentorUpdated = await mentorsUsecase.updateByID(id,req.body)
        
        res.json({
            success:true,
            data:{
                mentor: mentorUpdated
            }
        })

    } catch (error) {
        
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
})

module.exports=router