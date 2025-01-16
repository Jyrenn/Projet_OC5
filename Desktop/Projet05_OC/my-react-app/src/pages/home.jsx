import React from "react";
import "../home.scss";
import Banner from "../components/banner";
import Card from "../components/card";
import data from "../Data/logements.json";

function Home() {
  return (
    <div className="main">
      <Banner texte="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {data.map((item) => (
          <Card key={item.id} title={item.title} image={item.cover} />
        ))}
      </div>
    </div>
  );
}
export default Home;
