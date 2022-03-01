var pool = require('./bd');
// var md5 = require('md5');

async function getComentarios() {        //es asincronica porque no sé en que momento va a ser peticionada   //el nombre de la funcion puede ser cualquiera
    // try{
        var query = 'select * from comentarios inner join usuarios ON comentarios.ComOpdID = usuarios.OpdID INNER JOIN Catalogo on comentarios.ComTitleID = catalogo.id';
        var rows = await pool.query(query);
        return rows;
    // } catch (error){
    //     console.log(error);
    // }
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query,[obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    } //Cierra catch
} //cierra insert

async function deleteNovedadesByID(id) {
        var query = "delete from novedades where id = ?";
        var rows = await pool.query(query,[id]);
        return rows;
} //cierra delete


//para traer una novedad en particular
async function getNovedadById(id) {
    var query = 'Select * from novedades where id = ?';
    var rows = await pool.query(query,[id]);
    return rows[0];
  }

  /* para modificar cierta novedad */
async function modificarNovedadById(obj,id){
    try {
      var query = 'update novedades set ? where id = ?';
      var rows = await pool.query(query,[obj,id]);
    return rows;
      } catch (error) {
          throw error;
      }
  }


//module.exports = { getNovedades, insertNovedad, deleteNovedadesByID, getNovedadById, modificarNovedadById }
module.exports = { getComentarios }