const express = require('express')
const router = express.Router()

const mensajeController = require('../controller/mensajeController')

//-----------------------Para usuario-----------------------------------//

router.post('/', mensajeController.AgregarMensaje)

//----------------------Para programador--------------------------------//

router.get('/totalMensajes',mensajeController.ObtenerMensajes)
router.get('/',mensajeController.ObtenerMensajesSemanaAnterior)


module.exports = router