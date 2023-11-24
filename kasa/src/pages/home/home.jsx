import logo from '../../Assets/Images/logo.svg';
import '../../Assets/css/App.css';
import Banner from '../../components/Banners/home-banner';

function App() {
  return (
    <>
      <Banner />
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      </header>
    </div>*/
  );
}

export default App;
