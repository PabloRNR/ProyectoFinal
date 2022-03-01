var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usersModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{
      layout:'admin/layout'
  }
  );
});

router.get('/logout', function(req,res,next) {
  req.session.destroy(); //para limpiar las variables de sesion
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});

router.post('/',async(req,res,next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUserAndPass(usuario,password);
    
    if (data != undefined) {
      req.session.id_usuario = data.OpdID;  // es el campo ID del select * de usuarios
      req.session.nombre = data.OpdNom;

      //res.redirect('./comentarios');
      res.redirect('./catalogo');
    } else {
      res.render('admin/login',{
        layout: 'admin/layout' ,
        error: true
        // console.log(usuario);
      });
      // console.log(usuario);
      // console.log(password);
    }
  }  catch (error) {
    console.log(error);
  }
});


module.exports = router;