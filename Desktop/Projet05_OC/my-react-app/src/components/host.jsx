import React from "react";
import "../scss/host.scss";

const Host = ({ name, image }) => {
  return (
    <div className="host">
      <p className="host-name">{name}</p>
      <img className="host-image" src={image} alt="photo du propriétaire" />
    </div>
  );
};
export default Host;
