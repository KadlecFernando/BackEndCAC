const db = require('../database/db')

const ObtenerTiposProductos = (req,res) =>{
    const SQL = "SELECT * FROM tiposProductos"
    db.query(SQL, (err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const ObtenerTiposProductosPorId = (req,res) =>{
    const {id} = req.params
    const SQL = "SELECT * FROM tiposProductos WHERE idTipo = ?"
    db.query(SQL,[id],(err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const AgregarTiposProductos = (req,res) =>{
    const {descripcion} = req.body
    const SQL = "INSERT INTO tiposProductos (descripcion)" +
                              " VALUES (?)"

    db.query(SQL,[descripcion],(err,result)=>{
        if (err) throw err

        res.json({
            message: "TiposProductos agregado.",
            idProductoAutoincremental: result.insertId 
        })
    })
}

const EliminarTiposProductos = (req,res) =>{
    const {id} = req.params
    const SQL = "DELETE FROM tiposProductos WHERE idTipo = ?"
    db.query(SQL,[id],(err,result) =>{
        if (err) throw err

        res.json({
            message: "TiposProductos eliminado."
        })
    }) 
}

module.exports = {
    AgregarTiposProductos,
    ObtenerTiposProductos,
    ObtenerTiposProductosPorId,
    EliminarTiposProductos
}
