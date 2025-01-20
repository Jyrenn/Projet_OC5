import React from "react";
import { Link } from "react-router-dom";
import "../scss/card.scss";

const Card = ({ id, title, image }) => {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={image} className="card-image" alt="photo de la location" />
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
