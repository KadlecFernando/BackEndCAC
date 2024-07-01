const mySql = require('mysql2')
const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9MaT34DAdyx',
    database: 'loaloatt'
})

connection.connect((err) =>{
    if (err) {
        console.error('Error conectando a la Base de Datos', err)
        return
    }

    console.log('Conectado exitosamente a la Base de Datos')
})

module.exports = connection

