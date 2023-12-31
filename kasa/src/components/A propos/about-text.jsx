import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const iconToShow = open ? faAngleUp : faAngleDown;

  return (
    <div className="collapse-container">
      <button onClick={() => setOpen(!open)} className="collapse-title">
        {title}
        <FontAwesomeIcon icon={iconToShow} />
      </button>
      <div
        className={`collapse-content ${!open ? 'hide' : 'show'}`}
        style={{ maxHeight: !open ? '0' : '1000px' }} // Ajoutez cette ligne
      >
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Collapse;