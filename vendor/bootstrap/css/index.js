const express = require('express');
const router = express.Router ();
//rutas del servidor ("/" = ruta inicial )
router.get('/', (req , res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));//ruta del Inedex.html
    res.render('index.html', {title: 'Gasolineria'});
});

router.get('/contact', (req , res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));//ruta del Inedex.html
    res.render('contact.html', {title: 'Pahina2'});
});

module.exports = router;
