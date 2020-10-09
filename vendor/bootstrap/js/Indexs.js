const express = require ('express');
const app = express();
const path = require ('path');

//Configuraciones 
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//rutas
app.use(require('./routes/index'));

// archivos estaticos 

//Escuchando el servidor 
app.listen(app.set('port'), () => {
    console.log('Server on port', app.set('port'));
});