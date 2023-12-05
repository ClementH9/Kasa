import Chevron from '../../Assets/Images/vectorBas.svg'

export default function aboutText() {
	return (
		<div className="about-card">
            <div className="about-collapse">
                <h2 className="about-title">Fiabilité</h2>
                <img class="chevron-collapse" src={Chevron} alt="chevron-collapse" />
                <p className="about-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
            <div className="about-collapse">
                <h2 className="about-title">Respect</h2>
                <p className="about-text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div className="about-collapse">
                <h2 className="about-title">Service</h2>
                <p className="about-text">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div className="about-collapse">
                <h2 className="about-title">Sécurité</h2>
                <p className="about-text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
	);
}   