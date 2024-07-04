const express = require('express')
const router = express.Router()

const personaController = require('../controller/personaController')

//-----------------------Para usuario-----------------------------------//

router.get('/:nombre/:apellido/:mail',personaController.ObtenerPersona)
router.post('/',personaController.AgregarPersona)

module.exports = router