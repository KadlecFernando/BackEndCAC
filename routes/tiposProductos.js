const express = require('express')
const router = express.Router()

const tiposProductController = require('../controller/tiposProductController')

//-----------------------Para usuario-----------------------------------//

router.get('/',tiposProductController.ObtenerTiposProductos)
router.get('/:id',tiposProductController.ObtenerTiposProductosPorId)

//----------------------Para programador--------------------------------//

router.post('/',tiposProductController.AgregarTiposProductos)
router.delete('/:id',tiposProductController.EliminarTiposProductos)


module.exports = router