import React from "react";
import Logo from "../assets/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import "../scss/header.scss";

function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="liens">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
          <Link
            to="/About"
            className={location.pathname === "/About" ? "active" : ""}
          >
            À Propos
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
