const mysql = require('mysql'); 

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.log('El error de la conexión es : ' + error);
        return
    }
    console.log('Conexion a la base de datos MySQL exitosa');
})

//Exportamos la conexion
module.exports = conexion;