const express = require('express')
const router = express.Router()

const productController = require('../controller/productController')

router.get('/',productController.ObtenerTodosLosProductos)
router.get('/:id',productController.ObtenerProductoPorId)
router.put('/:id',productController.RestarStockPorProducto)
router.post('/',productController.AgregarProducto)
router.put('/:id',productController.EliminarProducto)
router.put('/:id',productController.ActualizarStockPorProducto)

module.exports = router
