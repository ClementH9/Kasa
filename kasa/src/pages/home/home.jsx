import '../../Assets/css/App.css';
import Banner from '../../components/Banners/home-banner';
import Gallery from '../../components/Gallery/gallery'

function App() {
  return (
    <>
      <div className="container">
        <Banner />
        <Gallery />
      </div>
    </>
  )
}

export default App;
