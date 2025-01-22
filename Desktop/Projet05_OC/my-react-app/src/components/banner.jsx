import React from "react";
import "../scss/banner.scss";

const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img src={image} alt="photo paysage" />
      {texte && <h1>{texte}</h1>}
    </div>
  );
};
export default Banner;
