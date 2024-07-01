const express = require('express')
const app = express()

    //.PORT no es nuestra variable sino un buffer que busca el primer puerto disponible
const PORT = process.env.PORT || 8080
const productosRouter = require('./routes/productos')
const presupuestosRouter = require('./routes/presupuestos')
const mensajesRouter = require('./routes/mensajes')
const ventasRoutes = require('./routes/ventasRoutes')
// app.get('/',(req,res) =>{
//     console.log('Esto tiene que salir en la consola')
//     res.send('Hola estamos probando el servidor con nodeman')
// })

app.use(express.json());

app.use('/productos',productosRouter)
app.use('/presupuestos',presupuestosRouter)
app.use('/mensajes',mensajesRouter)
app.use('/ventas', ventasRoutes);
app.listen(PORT,()=>{
    console.log(`Escuchando desde el servidor http://localhost:${PORT}`)
})






