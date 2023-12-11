import React from 'react';
import '../../Assets/css/App.css';

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={cover} className="card-cover rounded" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;