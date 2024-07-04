const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());

app.use((req, res, next) => {
    console.log('Body recibido:', req.body);
    next();
});

    //.PORT no es nuestra variable sino un buffer que busca el primer puerto disponible
const PORT = process.env.PORT || 3000
const productosRouter = require('./routes/productos')
const presupuestosRouter = require('./routes/presupuestos')
const mensajesRouter = require('./routes/mensajes')
const ventasRouter = require('./routes/ventas')
const tiposRouter = require('./routes/tiposProductos')
// app.get('/',(req,res) =>{
//     console.log('Esto tiene que salir en la consola')
//     res.send('Hola estamos probando el servidor con nodeman')
// })

app.use('/productos',productosRouter)
app.use('/presupuestos',presupuestosRouter)
app.use('/mensajes',mensajesRouter)
app.use('/ventas',ventasRouter)
app.use('/tiposproductos', tiposRouter)

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=>{
    console.log(`Escuchando desde el servidor http://localhost:${PORT}`)
})






