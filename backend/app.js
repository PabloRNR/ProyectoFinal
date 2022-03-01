/* dependencias
npx express-generator --view=hbs
npm i
npm i nodemon
npm i mysql
npm i dotenv
npm i util
npm i express-session
npm i md5
npm i nodemailer  //Crear cuenta
https://github.com/mars/create-react-app-buildpack    para hacer un deploy de la front
*/


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var nodemailer = require('nodemailer');
var cors = require('cors'); //para vincular front--back

require('dotenv').config();
var session = require('express-session');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var catalogoRouter = require('./routes/admin/catalogo');
//var comentariosRouter = require('./routes/admin/comentarios');
//var tituloRouter = require('./routes/admin/titulo');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

///lo pongo antes de las paginas ppales
app.use(session({
  secret: 'PW2021awqyeudj',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}))

secured = async (req,res,next) => {
try {
    console.log(req.session.id_usuario);   //lo define al vuelo id_usuario ??
    if (req.session.id_usuario) {
    next();
    } else {
    res.redirect('/admin/login');
    } //else redirect
  } catch (error) {
    console.log(error);
  } //catch else
} //secured

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/catalogo', secured,catalogoRouter); //no securizado
//app.use('/admin/comentarios',secured, comentariosRouter);
//app.use('/admin/titulo', tituloRouter);
app.use('/api', cors(), apiRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
