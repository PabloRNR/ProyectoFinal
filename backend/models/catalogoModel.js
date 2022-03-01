var pool = require('./bd');

async function getCatalogoFull() {        //es asincronica porque no sé en que momento va a ser peticionada   //el nombre de la funcion puede ser cualquiera
    var query = 'select * from catalogo';
    var rows = await pool.query(query);
    return rows;
}


async function getTituloById(id) {
    var query = 'Select * from catalogo where id = ?';
    var rows = await pool.query(query,[id]);
    return rows[0];
  }

async function insertTitulo(obj) {
    try {
        var query = "insert into catalogo set ?";
        var rows = await pool.query(query,[obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    } //Cierra catch
} //cierra insert


  /* para modificar cierto titulo */
async function modificarTituloById(obj,id){
    try {
      var query = 'update catalogo set ? where id = ?';
      var rows = await pool.query(query,[obj,id]);
    return rows;
      } catch (error) {
          throw error;
      }
  }

  async function deleteTituloByID(id) {
    var query = "delete from catalogo where id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
} //cierra delete

module.exports = { getCatalogoFull , insertTitulo , getTituloById, modificarTituloById,deleteTituloByID }