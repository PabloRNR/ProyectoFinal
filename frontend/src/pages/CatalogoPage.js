//import React from 'react';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatalogoTitulo from '../components/catalogo/CatalogoTitulo';


import '../styles/components/pages/CatalogoPage.css'

const CatalogoPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        const cargarCatalogo = async () => {
            setLoading(true);
            //const response = await axios.get('http://localhost:3000/api/catalogo');
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/catalogo`);
            console.log(response);
            setCatalogo(response.data);
            setLoading(false);
        };

        cargarCatalogo();
    }, []);


    return(
        // <div>CatalogoPage</div>
        <section className="holder">
            <h2>Catálogo de películas y series</h2>
            <br></br>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                catalogo.map(item => <CatalogoTitulo key={item.id}
                pelicula={item.title} director={item.director} año={item.year} rating={item.rating} desc={item.sinopsis}
                imagen={item.poster} body={item.cuerpo} />)
            )}
        </section>
    );
}


export default CatalogoPage;