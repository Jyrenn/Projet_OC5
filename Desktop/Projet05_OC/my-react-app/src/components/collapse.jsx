import React, { useState } from "react";
import "../scss/collapse.scss";
import image from "../assets/Images/fleche.png";

const Collapse = ({ title, description, equipment }) => {
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
        {description && <p className="collapse-description">{description}</p>}
        {equipment && Array.isArray(equipment) && (
          <ul className="collapse-equipment">
            {equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Collapse;
