import aboutBanner from "../../Assets/Images/about-background.png";

export default function bannerAbout() {
	return (
		<div className="about-banner">
			<img class="banner" src={aboutBanner} alt="background about banner" />
		</div>
	);
}