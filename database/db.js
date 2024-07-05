const mySql = require('mysql2');

const connection = mySql.createConnection(
    {
        host : 'localhost',
        user: 'root',
        password : '1106',
        database: 'loaloatt'
    });


    connection.connect((err) => 
    {
        if(err)
        {
            console.error("ERROR conectando a la base de datos", err);
            return;
        }

        console.log("Conectado EXITOSAMENTE a la base de datos");

    });


module.exports = connection;
