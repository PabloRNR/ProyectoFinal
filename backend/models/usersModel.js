var pool = require('./bd');
var md5 = require('md5');


//tengo duda si el nombre de los parámetros debe coincidir con los del login.hbs en el tag  de input de cada campo 'nombre='
async function getUserByUserAndPass(usuario,password) {        //es asincronica porque no sé en que momento va a ser peticionada   //el nombre de la funcion puede ser cualquiera
    try{
        var query = 'select * from usuarios where OpdNom = ? and OpdPas = ? limit 1'; //limit 1 es como select top 1??
        var rows = await pool.query(query, [usuario,md5(password)]);
        return rows[0];
    } catch (error){
        console.log(error);
    }
}

module.exports = { getUserByUserAndPass }