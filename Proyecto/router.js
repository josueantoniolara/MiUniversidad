const  express = require('express');
const router = express.Router();

//motor de plantillas
router.get('/contacto', (req, res)=>{
    res.send('CONTACTO');
})

//Exportar el modulo
module.exports = router;