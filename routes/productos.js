const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.json({
        message: 'Hola desde la ruta de usuarios'
    })
})