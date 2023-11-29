import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../Assets/Images/logo-kasa.svg'
 
function Header() {
    return (
        <header>
            <nav>
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
                <span class="menu font-text">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </span>
            </nav>
        </header>     
    )
}

export default Header