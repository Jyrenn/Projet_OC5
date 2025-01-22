import React from "react";
import "../home.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="main">
      <div className="error-title">
        <p>404</p>
      </div>
      <div className="error-description">
        <p>
          Oups! La page que
          <br className="mobile-only" /> vous demandez n'existe pas.
        </p>
      </div>
      <div className="error-link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}
export default Error;
