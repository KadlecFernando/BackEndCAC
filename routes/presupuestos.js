const express = require('express')
const router = express.Router()

const presupuestoController = require('../controller/presupuestoController')

//-----------------------Para usuario-----------------------------------//

router.post('/',presupuestoController.AgregarPresupuesto)

//----------------------Para programador--------------------------------//

router.get('/totalPresupuestos',presupuestoController.ObtenerPresupuestos)
router.get('/',presupuestoController.ObtenerPresupuestosSemanaAnterior)
router.get('/detallePresupuestos',presupuestoController.ObtenerPresupuestosDetalle)


module.exports = router