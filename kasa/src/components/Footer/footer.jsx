import logo from "../../Assets/Images/logo-footer.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<img class="footer-logo" src={logo} alt="logo de kasa" />
			<p className="footer-text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}