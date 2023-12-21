import logement from '../../Assets/logement.json';
import '../../Assets/css/App.css';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/A propos/about-text';
import Ratings from '../../components/Ratings/ratings'

function Appartement() {
  let { id } = useParams();
  const targetLogement = logement.find((data) => data.id==id);
  if (targetLogement) {
    const hostNameArray = targetLogement.host.name.split(' ');
    const hostFirstName = hostNameArray[0];
    const hostLastName = hostNameArray.slice(1).join(' ');
    return (
    /*<div className="infos-logement font-text">
      <img className="cover-logement" src={targetLogement.cover} alt="cover"></img>
      <h2 className="title-logement">{targetLogement.title}</h2>
      <div className="location-logement">{targetLogement.location}</div>
      <div className="tags-logement">{targetLogement.tags}</div>
      <div className="host-name-logement">{hostFirstName}
          <br />
          {hostLastName}</div>
      <img className="host-picture-logement" src={targetLogement.host.picture} alt="host"></img>
      <div className="rating-logement">{targetLogement.rating}</div>
      <div className="desc-logement">{targetLogement.description}</div>
      <div className="equipments-logement">{targetLogement.equipments}</div>
    </div>*/

    <div className="infos-logement font-text">
      <img className="cover-logement" src={targetLogement.cover} alt="cover"></img>
      <div className ="logement-top">
        <div className="logement-gauche">
          <div className="titre-lieu-tags">
            <h2 className="title-logement">{targetLogement.title}</h2>
            <div className="location-logement">{targetLogement.location}</div>
            <div className="tags-logement">{targetLogement.tags}</div>
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
            <div className="rating-logement">{targetLogement.rating}</div>
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
          content={String(targetLogement.equipments)}
          />
        </div>
      </div>
    </div>
    
    )
  }
}

export default Appartement;