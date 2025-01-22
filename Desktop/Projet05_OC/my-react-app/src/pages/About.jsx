import React from "react";
import "../home.scss";
import Banner from "../components/banner";
import Collapse from "../components/collapse";
import image from "../assets/Images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import data from "../Data/valeurs.json";

function About() {
  return (
    <div className="main">
      <Banner image={image} />
      <div className="collapses">
        {data.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
export default About;
