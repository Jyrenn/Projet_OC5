import React, { useState } from "react";
import "../scss/carrousel.scss";
import flechedroite from "../assets/Images/fleche_droite.png";
import flechegauche from "../assets/Images/fleche_gauche.png";

const Carrousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // État pour l'index de l'image

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <div className="carrousel-container">
        <img
          src={pictures[currentIndex]}
          alt={`${title} - Slide ${currentIndex + 1}`}
          className="logement-image"
        />
      </div>

      {/* Boutons de navigation */}
      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide} className="carrousel-btn prev-btn">
            <img src={flechegauche} />
          </button>
          <button onClick={nextSlide} className="carrousel-btn next-btn">
            <img src={flechedroite} />
          </button>
        </>
      )}

      {/* Indicateur du nombre d'images */}
      {pictures.length > 1 && (
        <div className="carrousel-indicator">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
