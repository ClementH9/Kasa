import { Link } from 'react-router-dom'
import React from 'react'
 
function Header() {
    return (
        <img className='Logo' alt="Logo" src="Logo"/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}

export default Header