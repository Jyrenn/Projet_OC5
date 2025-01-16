import React from "react";
import "../home.scss";
import Banner from "../components/banner";
import Card from "../components/card";
import data from "../Data/logements.json";
import defaultImage from "../assets/Images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

function Home() {
  return (
    <div className="main">
      <h1>YAAAAAAAAAAAAAAAAAA</h1>
      <Banner image={defaultImage} />
      <div className="gallery">
        {data.map((item) => (
          <Card key={item.id} title={item.title} image={item.cover} />
        ))}
      </div>
    </div>
  );
}
export default Home;
