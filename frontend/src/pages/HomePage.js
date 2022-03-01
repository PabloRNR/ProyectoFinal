import React from 'react';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return(
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/01.jpg" alt="Cinta"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                {/* <h2>Bienvenidos</h2> */}
                <p>En MovieStuff encontrarás las mejores reseñas, puntuaciones y demás info acerca de tus series y películas favoritas.</p>
                <p>Además contamos con una completa sección de actores, actrices y directores donde podrás conocer a cada protagonista.</p>
                <p>También podés dejarnos tu correo o tu contacto móvil para recibir las últimas novedades acerca de los próximos estrenos.</p>
            </div>
            <div className="testimonios right">
                {/* <h2>Testimonios</h2> */}
                <div className="testimonio">
                    {/* <span className="cita">Simplemente Excelente</span> */}
                    {/* <span className="autor">Juan Perez - zapatos.com</span> */}
                    <img src="img/home/png-transparent-oscar-oscar-oscars-oscar-clipart-thumbnail-removebg-preview.png"/>
                </div>
            </div>
        </div>
    </main>
    );
}


export default HomePage;