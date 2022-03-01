var pool = require('./bd');

async function getTitulobyId(id) {        //es asincronica porque no sé en que momento va a ser peticionada   //el nombre de la funcion puede ser cualquiera
    var query = 'select * from catalogo where id = ? limit 1';
    var rows = await pool.query(query,[id]);
    return rows[0];
}

module.exports = { getTitulobyId }