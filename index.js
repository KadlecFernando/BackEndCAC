const express = require('express')
const app = express()

    //.PORT no es nuestra variable sino un buffer que busca el primer puerto disponible
const PORT = process.env.PORT || 8080
const productosRouter = require('./routes/productos')

app.get('/',(req,res) =>{
    console.log('Esto tiene que salir en la consola')
    res.send('Hola estamos probando el servidor con nodeman')
})

app.listen(PORT,()=>{
    console.log(`Escuchando desde el servidor http://localhost:${PORT}`)
})

app.use(express.json())

app.use('/productos',productosRouter)





