import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/logements.json";
import "../home.scss";

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
    <div className="logement-detail">
      <h1>{logement.title}</h1>
      <img
        src={logement.cover}
        alt={logement.title}
        className="logement-image"
      />
      <p>{logement.description}</p>
      {/* Ajoutez plus de détails si nécessaire */}
    </div>
  );
}

export default LogementDetail;
