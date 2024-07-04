const db = require('../database/db')

//--------- agregar una venta ----------- //

const AgregarVenta = (req, res) => {
    const { idProducto, cantidadVendida } = req.body;
    const SQL = "INSERT INTO ventas (idProducto, cantidadVendida ,Fecha) VALUES (?, ?, NOW())";

    db.query(SQL, [idProducto, cantidadVendida], (err, result) => {
        if (err) throw err;

        res.json({
            message: "Venta agregada.",
            idVentaAutoincremental: result.insertId // Devuelve el id que se generó autoincremental
        });
    });
};
//------------------obtener todas las ventas------------------//
const ObtenerVentas = (req, res) => {
    const SQL = "SELECT * FROM ventas";

    db.query(SQL, (err, result) => {
        if (err) throw err;

        res.json(result);
    });
};

//------------------------ventas semana anterior-------------//
const ObtenerVentasSemanaAnterior = (req, res) => {
    const SQL = "SELECT * FROM ventas WHERE fecha BETWEEN DATE_SUB(NOW(), INTERVAL 7 DAY) AND NOW()";

    db.query(SQL, (err, result) => {
        if (err) throw err;

        res.json(result);
    })
};

// ----------------mostrar detalle de venta -----------------//
const ObtenerVentasDetalle = (req, res) => {
    const SQL = "SELECT v.idVenta," +
                "       p.descripcion," +
                "       v.cantidadVendida," +
                "       p.precio," +
                "      (p.precio * v.CantidadVendida) AS Ganancia" + 
                "  FROM ventas v" +
                "      LEFT JOIN productos p ON v.idProducto = p.idProducto";

    db.query(SQL, (err, result) => {
        if (err) throw err;

        res.json(result);
    });
};

module.exports = {
    AgregarVenta,
    ObtenerVentas,
    ObtenerVentasSemanaAnterior,
    ObtenerVentasDetalle
};