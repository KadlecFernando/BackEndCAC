const db = require('../database/db')

//--------- Desde el front (para el usuario) ----------- //


const AgregarPresupuesto = (req,res) =>{
    const {idPersona,estilo,referencia,referenciaIMG,zonaCuerpo} = req.body

    //FALTA REFERENCIAIMG CON MULTER

    const SQL = "INSERT INTO presupuestos(idPersona,estilo,referencia,zonaCuerpo,fecha) VALUES (?,?,?,?,now())"

    db.query(SQL,[idPersona,estilo,referencia,zonaCuerpo],(err,result)=>{
        if (err) throw err

        res.json({
            message: "Consulta de presupuesto enviado.",
            idPresupuestoAutoincremental: result.insertId //Te devuelve el id que se generó autoincremental
        })
    })
}


//----------- Para admin ----------//

const ObtenerPresupuestos = (req,res) =>{
    const SQL = "SELECT * FROM presupuestos"

    db.query(SQL, (err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const ObtenerPresupuestosSemanaAnterior = (req,res) =>{
    
    const SQL = "SELECT * FROM presupuestos WHERE fecha BETWEEN DATE_SUB(NOW(), INTERVAL 7 DAY) AND NOW();"
    
    db.query(SQL, (err,result) =>{
        if (err) throw err

        res.json(result)
    }) 
}

const ObtenerPresupuestosDetalle = (req,res) =>{

    const SQL = "SELECT pre.estilo, pre.referencia, pre.zonaCuerpo, pre.fecha, per.nombre, per.apellido, per.mail, per.whatsapp" +
                "  FROM presupuestos pre" +
                "       LEFT JOIN personas per ON per.idPersona = pre.idPersona" +
                " WHERE per.idPersona = 1;"
    
    db.query(SQL,(err,result) =>{
        if (err) throw err

        res.json(result)
    })
}

module.exports = {
    AgregarPresupuesto,
    ObtenerPresupuestos,
    ObtenerPresupuestosSemanaAnterior,
    ObtenerPresupuestosDetalle
}