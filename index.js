const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')

app.use(express.json());

/*CORS nos permite conectar el back y el front en nuestro caso que estan en repos distintos*/
 const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
 };

app.use(cors());

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
const personasRouter = require('./routes/personas')

// app.get('/',(req,res) =>{
//     console.log('Esto tiene que salir en la consola')
//     res.send('Hola estamos probando el servidor con nodeman')
// })

app.use('/productos',productosRouter)
app.use('/presupuestos',presupuestosRouter)
app.use('/mensajes',mensajesRouter)
app.use('/ventas',ventasRouter)
app.use('/tiposProductos', tiposRouter)
app.use('/personas', personasRouter)


app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=>{
    console.log(`Escuchando desde el servidor http://localhost:${PORT}`)
})






