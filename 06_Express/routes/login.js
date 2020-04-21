
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let msg = 'Acceso no permitido'
    if(req.query.nombre === 'Manu'){
        msg = `Saludos ${req.query.nombre} !`
    }
    res.send(msg);
});

router.post('/', function(req, res, next) {
    let msg = 'Falta tu correo'
    if(req.body.email){
        msg = `Correo enviado ${req.body.email} !`
    }
    res.send(msg);
});

module.exports = router;