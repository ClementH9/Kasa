import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/Images/LOGO-KASA.svg';
 
function Header() {
    return (
        <nav>
            <img className="logo" src={logo} alt="logo de l'agence kasa" />
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}

export default Header