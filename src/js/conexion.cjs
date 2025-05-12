let mysql = require('mysql2');

let conexion = mysql.createConnection({

    host: 'localhost',
    database: 'bdd_basurin',
    user: 'root',
    password: '',
    port: 3306,
    multipleStatements: true


});

conexion.connect(function (err) {

    if(err){

        throw err;

    }else{

        console.log('Conectado a la base de datos puto');

    }

});