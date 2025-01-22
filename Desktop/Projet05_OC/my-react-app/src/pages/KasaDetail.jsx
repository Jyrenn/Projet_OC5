import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/logements.json";
import "../home.scss";
import "../scss/collapse.scss";
import Carrousel from "../components/carrousel.jsx";
import Collapse from "../components/collapse.jsx";

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
        <h1 className="logement-title">{logement.title}</h1>
        <div className="collapses-detail">
          <Collapse title="Description" description={logement.description} />
          <Collapse title="Équipements" equipment={logement.equipments} />
        </div>
      </div>
    </div>
  );
}

export default LogementDetail;
