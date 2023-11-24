import logo from "../../Assets/Images/logo-footer.svg";
import fondnoir from "../../Assets/Images/fond-noir-banner.png"

export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
            <img src={fondnoir} alt="fond noir" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}