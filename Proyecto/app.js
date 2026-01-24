const express = require('express');
const app = express();

//motor de plantillas 
app.set('view engine', 'ejs');



app.listen( 5000, ()=>{
    console.log('SERVIDOR corriendo eh http://localhost:5000');
});