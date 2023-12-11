import Card from '../../components/Card/card';
import logement from '../../Assets/logement.json';
import { NavLink } from 'react-router-dom';

function Gallery() {
  return (
    <section className="home-gallery font-text">
      {logement.map((data) => {
        return (
          <div className="dim-img" key={data.id}>
            <NavLink to="/Logement/:id">
              <Card title={data.title} cover={data.cover} />
            </NavLink>
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;