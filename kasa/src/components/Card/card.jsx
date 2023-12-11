import React from 'react';
import '../../Assets/css/App.css';

function Card({ cover, title }) {
    return (
      <div className="card">
        <img src={cover} alt={cover} className="card-cover" />

        <h2 className="card-title">{title}</h2>
      </div>
    );
}

export default Card;
