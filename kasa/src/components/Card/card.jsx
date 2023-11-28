import React from 'react';

function Card({ cover, title }) {
    return (
      <div className="card">
        <img src={cover} alt={cover} className="card-cover" />
        <div className="card-overlay"></div>

        <h2 className="card-title">{title}</h2>
      </div>
    );
}

export default Card;
