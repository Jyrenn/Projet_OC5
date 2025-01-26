import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/logements.json";
import "../App.scss";
import Carrousel from "../components/carrousel.jsx";
import Collapse from "../components/collapse.jsx";
import TitleLocation from "../components/titleLocation.jsx";
import Host from "../components/host.jsx";
import Tag from "../components/tag.jsx";
import Rating from "../components/rating.jsx"; // Import du composant Rating

function LogementDetail() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Permet de rediriger l'utilisateur
  const logement = data.find((item) => item.id === id); // Trouve le logement correspondant

  useEffect(() => {
    if (!logement) {
      navigate("/error"); // Redirige vers la page d'erreur
    }
  }, [logement, navigate]);

  // Affichage si le logement est valide
  if (!logement) {
    return null; // Rend rien pendant la redirection
  }

  return (
    <div className="main">
      <div className="logement-detail">
        <Carrousel pictures={logement.pictures} title={logement.title} />
        <div className="flex-container">
          <div className="flex1">
            <TitleLocation
              title={logement.title}
              location={logement.location}
            />
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <Tag key={index} title={tag} />
              ))}
            </div>
          </div>
          <div className="flex2">
            <Host name={logement.host.name} image={logement.host.picture} />
            <div className="rating-container">
              <Rating rating={parseInt(logement.rating)} />
            </div>
          </div>
        </div>
        <div className="collapses-detail">
          <Collapse title="Description" description={logement.description} />
          <Collapse title="Équipements" equipment={logement.equipments} />
        </div>
      </div>
    </div>
  );
}

export default LogementDetail;
