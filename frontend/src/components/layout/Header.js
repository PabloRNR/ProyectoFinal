//import React from 'react';
import '../../styles/components/layout/Header.css'
import '../../normalize.css'

const Header = (props) => {
    return(
        //<div>Header</div>
        <header>
            <div className="holder">
                <div classname="logo">
                    <img src="img/logo.png" width="100" alt="MovieStuff"/>
                    <h1>MovieStuff</h1>
                </div>
            </div>
        </header>
    );
}


export default Header;