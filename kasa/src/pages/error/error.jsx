import '../../Assets/css/App.css';
import { NavLink } from "react-router-dom";

function Error() {
    return (
        <>
            <div className="error">
                <p className="error-number">404</p>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className="error-link">Retourner sur la page d'accueil</NavLink>
            </div>
        </>
        );
    }

export default Error;