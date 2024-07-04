const db = require('../database/db')

//--------- Desde el front (para el usuario) ----------- //

const ObtenerTodosLosProductos = (req,res) =>{
    const SQL = "SELECT * FROM productos"
    db.query(SQL, (err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const ObtenerProductoPorId = (req,res) =>{
    const {id} = req.params
    const SQL = "SELECT * FROM productos WHERE idProducto = ?"
    db.query(SQL,[id],(err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const RestarStockPorProducto = (req,res) =>{
    const {id} = req.params
    const {cantVendida} = req.body
    const SQL = "UPDATE productos SET cantidadStock = cantidadStock - ? WHERE idProducto = ?"
    db.query(SQL,[cantVendida,id],(err,result) =>{
        if (err) throw err

        res.json({
            message: "Stock actualizado."
        })
    })
}

//----------- Para admin ----------//

const AgregarProducto = (req,res) =>{
    console.log(req.body)
    const {descripcion,precio,cantidadStock,idTipo,rutaImagen} = req.body
    const SQL = "INSERT INTO productos (descripcion,precio,cantidadStock,idTipo,rutaImagen)" +
                              " VALUES (?,?,?,?,?)"

    db.query(SQL,[descripcion,precio,cantidadStock,idTipo,rutaImagen],(err,result)=>{
        if (err) throw err
            

        res.json({
            message: "Producto agregado.",
            idProductoAutoincremental: result.insertId //Te devuelve el id que se generó autoincremental
        })
    })
}

const EliminarProducto = (req,res) =>{
    const {id} = req.params
    const SQL = "DELETE FROM productos WHERE idProducto = ?"
    db.query(SQL,[id],(err,result) =>{
        if (err) throw err

        res.json({
            message: "Producto eliminado."
        })
    }) 
}

const ActualizarStockPorProducto = (req,res) =>{
    const {id} = req.params
    const {cantComprada} = req.body
    const SQL = "UPDATE productos SET cantidadStock = (cantidadStock + ?) WHERE idProducto = ?"
    db.query(SQL,[cantComprada,id],(err,result) =>{
        if (err) throw err

        res.json({
            message: "Stock actualizado."
        })
    })
}

module.exports = {
    ObtenerTodosLosProductos,
    ObtenerProductoPorId,
    RestarStockPorProducto,
    AgregarProducto,
    EliminarProducto,
    ActualizarStockPorProducto
}





