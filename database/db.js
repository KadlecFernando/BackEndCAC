require('dotenv').config();
const mySql = require('mysql2');

// donde creamos la base en la nube mysql-kadlecfernando.alwaysdata.net
// se administra desde https://phpmyadmin.alwaysdata.com/
//Ver user, contra, etc.
const connection = mySql.createConnection(
    {
        // esto ahora se requiere de dotenv

    //  host : 'localhost',
    //  user: 'root',           
    //  password : '19042$',
    //  database: 'loaloatt'

    //Y HABRIA QUE CAMBIAR LAS RUTAS DE FORMULARIOS Y TIENDA A LOCALHOST EN VEZ DE https://back-end-cac.vercel.app

        host : process.env.DB_HOST,
        user: process.env.DB_USER,        
        password : process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectTimeout: 10000


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
