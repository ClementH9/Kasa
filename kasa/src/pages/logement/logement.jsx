import logement from '../../Assets/logement.json';
import '../../Assets/css/App.css';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/A propos/about-text';
import Tags from '../../components/Tags/tags';
import Ratings from '../../components/Ratings/ratings';
import Carrousel from '../../components/Carrousel/carrousel'

function Appartement() {
  let { id } = useParams();
  const targetLogement = logement.find((data) => data.id==id);
  if (targetLogement) {
    const hostNameArray = targetLogement.host.name.split(' ');
    const hostFirstName = hostNameArray[0];
    const hostLastName = hostNameArray.slice(1).join(' ');
    return (
    <div className="infos-logement font-text">
      <Carrousel pictures={targetLogement.pictures}/>
      <div className ="logement-top">
        <div className="logement-gauche">
          <div className="titre-lieu-tags">
            <h2 className="title-logement">{targetLogement.title}</h2>
            <div className="location-logement">{targetLogement.location}</div>
            <Tags tags={targetLogement.tags}/>  
          </div>
        </div>
        <div className="logement-droite">
          <div className="nom-photo-note">
            <div className="name-photo-host">
              <div className="host-name-logement">{hostFirstName}
              <br />
              {hostLastName}</div>
              <img className="host-picture-logement" src={targetLogement.host.picture} alt="host"></img>
            </div>
            <Ratings rating={targetLogement.rating} />
          </div>
        </div>
      </div>
      <div className="collapses">
        <div className="collapse-description">
          <Collapse 
          title="Description"
          content={String(targetLogement.description)}
          />
        </div>
        <div className="collapse-equipments">
          <Collapse 
          title="Equipements"
          content={targetLogement.equipments.join("\n")}
          />
        </div>
      </div>
    </div>
    
    )
  }
}

export default Appartement;