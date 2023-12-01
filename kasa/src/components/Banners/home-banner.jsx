import homeBanner from "../../Assets/Images/background-banner.png";

export default function bannerHome() {
	return (
		<div className="home-banner">
			<img class="banner" src={homeBanner} alt="background banner" />
			<h1 className="home-banner-text font-text">Chez vous, partout et ailleurs</h1>
		</div>
	);
}