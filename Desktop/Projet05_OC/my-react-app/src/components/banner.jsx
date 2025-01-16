import React from "react";
import defaultImage from "../assets/Images/eric-muhr-P_XxsdVgtpQ-unsplash.png";
import "../scss/banner.scss";

const Banner = ({ image = defaultImage, texte }) => {
  return (
    <div className="banner">
      <img src={image} alt="photo paysage" />
      {texte && <h1>{texte}</h1>}
    </div>
  );
};
export default Banner;
