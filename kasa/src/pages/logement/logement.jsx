import logement from '../../Assets/logement.json';
import '../../Assets/css/App.css';
import { useParams } from 'react-router-dom';

function Appartement() {
  let { id } = useParams();
  const targetLogement = logement.find((data) => data.id==id);
  if (targetLogement) {
    
    const hostNameArray = targetLogement.host.name.split(' ');
    const hostFirstName = hostNameArray[0];
    const hostLastName = hostNameArray.slice(1).join(' ');
    return (
    <div className="infos-logement font-text">
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
    </div>
    
    )
  }
}

export default Appartement;