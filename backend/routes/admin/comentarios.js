var express = require('express');
const pool = require('../../models/bd');
var router = express.Router();
var comentariosModel = require('./../../models/comentariosModel');

router.get('/', async function(req, res, next) {

    var comentarios = await comentariosModel.getComentarios();
  
    res.render('admin/comentarios',{
        layout:'admin/layout',
        usuario: req.session.nombre,
        comentarios     //este es que luego toma el render entre {{}}
    });
  });

module.exports = router;