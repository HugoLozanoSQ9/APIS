const generationsUsecase = require('../usecases/generations.usecase')

const express = require('express')

const router = express.Router()

router.get('/',async(req,res)=>{
    try {

        const generations = await generationsUsecase.getAll() 
        
        res.json({
            success:true,
            data:{
                generations
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
        const genPost = await generationsUsecase.create(req.body)
        res.json({
            success:true,
            data:{
                post:genPost
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

router.get('/:id',async (req,res)=>{
    try {

        const {id} = req.params
        
        const generation = await generationsUsecase.getById(id) 
        
        res.json({
            success:true,
            data:{
                generation
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
        
        const genDeleted = await generationsUsecase.deleteById(id)
        
        res.json({
            success:true,
            data:{
                generation_Deleted: genDeleted
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
        
        const genUpdated = await generationsUsecase.updateByID(id,req.body)
        
        res.json({
            success:true,
            data:{
                gen_Updated: genUpdated
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