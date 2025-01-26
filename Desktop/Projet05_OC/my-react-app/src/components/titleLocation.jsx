import React from "react";
import "../scss/titleLocation.scss";

const TitleLocation = ({ title, location }) => {
  return (
    <div className="title-position">
      <h1 className="logement-title">{title}</h1>
      <p className="logement-location">{location}</p>
    </div>
  );
};
export default TitleLocation;
