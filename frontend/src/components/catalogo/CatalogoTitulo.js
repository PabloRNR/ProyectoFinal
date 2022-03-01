import React from 'react';
// import '../styles/components/pages/CatalogoTitulo.css'
import '../../styles/components/pages/CatalogoTitulo.css'
const CatalogoTitulo = (props) => {
    const { pelicula, director, año, rating , desc, imagen, body } = props;

    return (
        <div className="catalogo">
            <img src={imagen} />
            <h1>{pelicula}</h1>
            <div className="dire">
                Dirigida por 
                <h2>{director}</h2>
            </div>
            <div className="ano">
                Año:
                <h3>   {año}</h3>
            </div>
            <div className="rating">
                Puntaje:
                <h3>   {rating}</h3>
            </div>
            <div className="borde">
                <p>{desc}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}



export default CatalogoTitulo;