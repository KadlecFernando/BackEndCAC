const express = require('express')
const router = express.Router()

const ventasController = require('../controller/ventasController')

router.post('/agregar', ventasController.AgregarVenta)
router.get('/', ventasController.ObtenerVentas)
router.get('/semanaAnterior', ventasController.ObtenerVentasSemanaAnterior)
router.get('/detalle', ventasController.ObtenerVentasDetalle)

module.exports = router