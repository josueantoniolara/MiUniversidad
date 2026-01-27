const  express = require('express');
const router = express.Router();

const conexion = require('./DataBase/DB');


//motor de plantillas
router.get('/', (req, res)=>{
    res.render('./Views/Index.ejs');
    // conexion.query('SELECT * FROM users', (error, results)=>{
    //     if(error){
    //         throw error;
    //     } else {
    //         res.render(results);
    //     }       
})

//Exportar el modulo
module.exports = router;