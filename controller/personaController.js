const db = require('../database/db')

const ObtenerPersona = (req,res) =>{
    const {nombre,apellido,mail} = req.params
    const SQL = "SELECT idPersona FROM personas WHERE nombre = ? AND apellido = ? AND mail = ?"
    db.query(SQL,[nombre,apellido,mail],(err,result) =>{
        if (err) throw err
        alert(`${result}`)
        res.json(result)
    }) 
}

const AgregarPersona = (req,res) =>{
    console.log(req.body)
    const {nombre,apellido,mail,whatsapp} = req.body
    const SQL = "INSERT INTO personas (nombre,apellido,mail,whatsapp)" +
                              " VALUES (?,?,?,?)"

    db.query(SQL,[nombre,apellido,mail,whatsapp],(err,result)=>{
        if (err) throw err

        res.json({
            message: "Persona agregada.",
            idPersonaAutoincremental: result.insertId //Te devuelve el id que se generó autoincremental
        })
    })
}

module.exports = {
    ObtenerPersona,
    AgregarPersona
}