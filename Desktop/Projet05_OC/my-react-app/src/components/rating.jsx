import React from "react";
import "../scss/rating.scss";
import starGrey from "../assets/Images/star-grey.png";
import starRed from "../assets/Images/star-red.png";

const Rating = ({ rating }) => {
  const maxStars = 5; // Nombre maximum d'étoiles

  // Crée un tableau avec des valeurs pour les étoiles rouges (remplies) et grises (vides)
  const stars = Array.from({ length: maxStars }, (_, index) => index < rating);

  return (
    <div className="rating">
      {stars.map((isFilled, index) => (
        <img
          key={index}
          className={`star ${isFilled ? "star-filled" : "star-empty"}`}
          src={isFilled ? starRed : starGrey}
        />
      ))}
    </div>
  );
};

export default Rating;
