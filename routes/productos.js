const express = require('express')
const router = express.Router()

const productController = require('../controller/productController')

//-----------------------Para usuario-----------------------------------//

router.get('/',productController.ObtenerTodosLosProductos)
router.get('/:id',productController.ObtenerProductoPorId)
router.get('/productostipo/:idTipo',productController.ObtenerProductoPorTipo)
router.put('/ventas/:id',productController.RestarStockPorProducto)

//----------------------Para programador--------------------------------//

router.post('/',productController.AgregarProducto)
router.delete('/:id',productController.EliminarProducto)
router.put('/compras/:id',productController.ActualizarStockPorProducto)


module.exports = router
