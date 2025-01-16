import React from "react";
import defaultImage from "../assets/Images/eric-muhr-P_XxsdVgtpQ-unsplash.png";
import "../scss/banner.scss";

const Banner = ({ image = defaultImage }) => {
  return (
    <div className="banner">
      <img src={image} alt="photo paysage" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};
export default Banner;
