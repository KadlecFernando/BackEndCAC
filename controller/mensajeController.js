const db = require('../database/db')

//--------- Desde el front (para el usuario) ----------- //

const AgregarMensaje = (req,res) =>{
    const {idPersona,mensaje} = req.body
    const SQL = "INSERT INTO mensajes(idPersona,mensaje,fecha)" +
                              " VALUES (?,?,NOW())"

    db.query(SQL,[idPersona,mensaje],(err,result)=>{
        if (err) throw err

        res.json({
            message: "Mensaje enviado.",
            idMensajeAutoincremental: result.insertId //Te devuelve el id que se generó autoincremental
        })
    })
}


//----------- Para admin ----------//


const ObtenerMensajes = (req,res) =>{
    const SQL = "SELECT * FROM mensajes"
    db.query(SQL, (err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const ObtenerMensajesSemanaAnterior = (req,res) =>{
    const SQL = "SELECT * FROM mensajes WHERE fecha BETWEEN DATE_SUB(NOW(), INTERVAL 7 DAY) AND NOW();"
    
    db.query(SQL, (err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

module.exports = {
    AgregarMensaje,
    ObtenerMensajes,
    ObtenerMensajesSemanaAnterior
}