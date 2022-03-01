//npm i cloudinary
//npm i express-fileupload

var express = require('express');
var router = express.Router();
var pool = require('./../../models/bd');
var util = require('util');
var tituloModel = require('./../../models/tituloModel');


/*Modificar > formulario + traer los datos de 1 sola novedad*/
 router.get('/:id', async (req,res,next) => {
     var id = req.params.id;
     console.log(req.params.id);
     var titulo = await tituloModel.getTitulobyId(id);

     console.log(req.params.id);
     res.render('admin/titulo', {
       layout: 'admin/layout',
       titulo
     });

   });



module.exports = router;