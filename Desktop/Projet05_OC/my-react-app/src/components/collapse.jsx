import React, { useState } from "react";
import "../scss/collapse.scss";
import image from "../assets/Images/fleche.png";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="collapse">
        <p className="collapse-title">{title}</p>
        <img src={image} alt="flèche déroulante" onClick={toggleCollapse} />
      </div>
      {isOpen && <div className="collapse-description">{description}</div>}
    </div>
  );
};

export default Collapse;
