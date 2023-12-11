import Card from '../../components/Card/card'
import logement from '../../Assets/logement.json'
import { NavLink } from "react-router-dom";

function Gallery() {
    return (
      <section className='home-gallery font-text'>
        {logement.map(data => {
          return (
            <div className="dim-img">
              <NavLink to="/Logement/:id">
              <Card
                  key={data.id} 
                  id={data.id} 
                  title={data.title} 
                  cover={data.cover} 
              />
              </NavLink>
            </div>
          )
        })}
      </section>
    )
  }
  
  export default Gallery