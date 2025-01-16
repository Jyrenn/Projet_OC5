import React, { useState } from "react";
import "../scss/collapse.scss";
import image from "../assets/Images/fleche.png";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-wrapper">
      <div className="collapse">
        <p className="collapse-title">{title}</p>
        <img
          src={image}
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          alt="flèche déroulante"
          onClick={toggleCollapse}
        />
      </div>
      <div
        className={`collapse-description-wrapper ${isOpen ? "open" : "closed"}`}
      >
        <div className="collapse-description">{description}</div>
      </div>
    </div>
  );
};

export default Collapse;
