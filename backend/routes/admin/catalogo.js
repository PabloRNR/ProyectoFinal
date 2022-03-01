var express = require('express');   //para la sesion
var router = express.Router();    //para la sesion
var pool = require('./../../models/bd');
var catalogoModel = require('./../../models/catalogoModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// function validateDecimal(valor) {
//   var RE = /^\d*(\.\d{1})?\d{0,1}$/;
//   if (RE.test(valor)) {
//       return true;
//   } else {
//       return false;
//   }
// }

router.get('/', async function (req, res, next) {

  var catalogoFull = await catalogoModel.getCatalogoFull();

  // cloudinary.v2.uploader.upload(filePath, {
  //   folder: 'MovieStuff',
  //   use_filename: true
  //  });

  //no se como se define en este caso la variable titulo .... no entiendo
  catalogoFull = catalogoFull.map(titulo => {
    if (titulo.img_id) {
      //const imagen = cloudinary.image('moviestuff/' + titulo.img_id, {
      const imagen = cloudinary.image(titulo.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...titulo,
        imagen
      }
    } else {
      return {
        ...titulo,
        imagen: ''
      }
    }
  });

  res.render('admin/catalogo', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    catalogoFull     //este es que luego toma el render entre {{}}
  });
});


router.get('/agregar', async (req, res, next) => {

  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) //cierra render no lleva ;
}); //cierra get  lleva ;



router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      poster = req.files.img_id;
      img_id = (await uploader(poster.tempFilePath)).public_id;
    }

    if (req.body.year != 0 && (req.body.year < 1895 || req.body.year > 2023)) {    ///req.body.ano ANO ???
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Año fuera de Rango'
      })
    } else {
      if (req.body.rating != 0 && (req.body.rating < 1 || req.body.rating > 10)) {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          message: 'La calificación debe ser un valor entre 1-10'
        })
      } else {
        if (req.body.titulo != "" && req.body.director != "" && req.body.year != 0 && req.body.rating != 0 && req.body.sinopsis != "") {
          /* antes (sin imagen)
          await catalogoModel.insertTitulo(req.body);
          res.redirect('/admin/catalogo') */

          await catalogoModel.insertTitulo({
            ...req.body,
            img_id

          });
          res.redirect('/admin/catalogo')

        } else {
          res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'Todos los campos son requeridos'
          })
        }
      }
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se agregó el título'
    }); //Cierra render
  } //cierra catch
}); //Cierra get


/*Modificar > formulario + traer los datos de 1 sola novedad*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var titulo = await catalogoModel.getTituloById(id);

  console.log(req.params.id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    titulo
  });
});


/* para modificar la novedad propiamente dicha*/
router.post('/modificar', async (req, res, next) => {
  try {

    let err_ano = false;
    let img_id = req.body.poster_original;
    let borrar_poster_viejo = false;
    // let ano_comp = req.body.ano
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_poster_viejo = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        poster = req.files.img_id;  //revisar esta linea
        img_id = (await uploader(poster.tempFilePath)).public_id;
        borrar_poster_viejo = true;
      }
    }
    if (borrar_poster_viejo && req.body.poster_original) {
      await (destroy(req.body.poster_original));
    }

    if (req.body.year != 0 && (req.body.year < 1895 || req.body.year > 2023)) {
      res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'Año fuera de Rango'
      })
    } else {

              if (req.body.rating != 0 && (req.body.rating < 1 || req.body.rating > 10)) {
                res.render('admin/modificar', {
                  layout: 'admin/layout',
                  error: true,
                  message: 'La calificación debe ser un valor entre 1-10'
                })
              } else {
                      var obj = {
                        title: req.body.title,
                        director: req.body.director,
                        year: req.body.year,
                        rating: req.body.rating,
                        sinopsis: req.body.sinopsis,
                        img_id
                        // cuerpo: req.body.cuerpo
                      }
                      console.log(obj)

                      await catalogoModel.modificarTituloById(obj, req.body.id);
                      res.redirect('/admin/catalogo');
                    }
            }
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó el título'
    })
  }
});


////++para controlar la eliminacion
router.get('/eliminar/:id', async (req,res,next) => {
  var id = req.params.id;

  let titulo = await catalogoModel.getTituloById(id);
  if (titulo.img_id) {
    await(destroy(titulo.img_id));  //esto hace que se borre tambien de cloudinary
  }

  await catalogoModel.deleteTituloByID(id);
  res.redirect('/admin/catalogo');
}); //Cierra get para el delete
////--








/* GET home page. */    //NO SE QUE HACER CON ESTO ??? . no entiendo para q sirve
router.get('/', function (req, res, next) {
  pool.query('select * from catalogo').then(function (resultados) {
    console.log(resultados)
  });
  res.render('admin/catalogo', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
});


// select
// pool.query('select * from catalogo').then(function (resultados){
//   console.log(resultados)
// });

module.exports = router;