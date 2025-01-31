import React from "react";
import "../App.scss";
import Banner from "../components/banner";
import Card from "../components/card";
import data from "../Data/logements.json";
import image from "../assets/Images/eric-muhr-P_XxsdVgtpQ-unsplash.png";
function Home() {
  return (
    <div className="main">
      <Banner image={image} texte="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.cover}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
