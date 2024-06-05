//30
const kodersUsecase = require('../usecases/koders.usecase')
//31
const express = require('express')
//32
const router = express.Router()

const auth = require('../middlewares/auth.middleware')

//GET /koders 34
router.get('/', auth ,async (req,res)=>{
    //36
    try {
        //35
        const koders = await kodersUsecase.getAll() //ismpre es importante ponerse encima de la función para saber si es una promesa o no 
        //38
        res.json({
            success:true,
            data:{
                koders
            }
        })

    } catch (error) { //37
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
    
})

//39
router.post('/',async(req,res)=>{
    //40
    try { 
        //42
        const koderCreated = await kodersUsecase.create(req.body) 
        //43
        res.json({
            success:true,
            data:{
                koder : koderCreated
            }
        })
    } catch (error) {
        //41 Se pone lo mismo en todos los endpoint's
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
})
//44
router.get('/:id',auth,async (req,res)=>{
    try {
        //45
        const {id} = req.params
        //47
        const koder = await kodersUsecase.getById(id) //ismpre es importante ponerse encima de la función para saber si es una promesa o no 
        //48
        res.json({
            success:true,
            data:{
                koder
            }
        })
    } catch (error) { //46
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
    
})

//49
router.delete('/:id',auth, async (req,res)=>{
    //50
    try {
        //51
        const {id} = req.params
        //53
        const koderDeleted = await kodersUsecase.deleteById(id)
        //54
        res.json({
            success:true,
            data:{
                koder : koderDeleted
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

//55
router.patch('/:id',auth,async(req,res)=>{
    try {
        //56
        const {id} = req.params
        //58
        const koderUpdated = await kodersUsecase.updateByID(id,req.body)
        //59
        res.json({
            success:true,
            data:{koder:koderUpdated}
        })

    } catch (error) {
        //57
        res.status(error.status || 500)
        res.json({
            success:false,
            error: error.message
        })
    }
})

//33
module.exports = router