const  express = require('express');
const router = express.Router();
//Importamos la ruta de la DB
const conexion = require('./DataBase/DB');


//motor de plantillas
router.get('/', (req, res)=>{
   conexion.query('SELECT ID, USER, ROL FROM users',(error, results)=>{
    if(error){
        throw error;
    }else{
        res.send(results); 
    }
   }) 
})

//Exportar el modulo
module.exports = router;