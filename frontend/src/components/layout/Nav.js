//import React from 'react';

import '../../styles/components/layout/Nav.css';
import '../../normalize.css'
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return(
        <nav>
            <div className="holder">
            <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/actores">Actores</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/catalogo">Catalogo</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
            </ul>
            </div>
        </nav>
    );
}


export default Nav;