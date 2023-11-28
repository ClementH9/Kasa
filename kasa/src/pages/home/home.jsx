import logo from '../../Assets/Images/logo.svg';
import '../../Assets/css/App.css';
import Banner from '../../components/Banners/home-banner';
import Card from '../../components/Card/card'

function App() {
  return (
    <>
      <Banner />
    </>
    <div>
        {logementCard.map((logement, logement.json) => (
            <Card
                cover={`${profile.name}-${index}`}
                title={logement.title}
            />
        ))}
    </div>
  )
}

export default App;
