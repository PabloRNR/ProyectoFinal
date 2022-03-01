//api.js se crea fuera del admin

var express = require('express');
var router = express.Router();
var catalogoModel = require('./../models/catalogoModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/catalogo', async function (req,res,next) {
    let catalogoFull = await catalogoModel.getCatalogoFull();

    catalogoFull = catalogoFull.map(titulo => {
        if (titulo.img_id) {
            const poster = cloudinary.url(titulo.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...titulo,
                poster
            }
        } else {
            return {
                ...titulo,
                poster: ''
            }
        }
    });

    res.json(catalogoFull);
});

router.post('/contacto',async(req,res) => {
    const mail = {
        to: 'pminisini@gmail.com',
        subject: 'Contacto web - MovieStuff',
        html: `${req.body.nombre} se contactó a traves de la web y quiere suscribirse para recibir novedades acerca de los próximos estrenos. <br> 
        Su correo es: ${req.body.email} <br>
        Su teléfono es: ${req.body.telefono} <br>
        Además, nos dejó el siguiente comentario: ${req.body.mensaje}
        `
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }); //cierra transp

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;