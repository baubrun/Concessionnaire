import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg px-3" id="navBar">
      <Link to="#" className="navbar-brand text-success">
        <i className="fas fa-car fa-2x"></i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMenu"
      >
        <span className="navbar-icon text-success">
          <i className="fas fa-bars fa-2x"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav mx-auto ">
          <li className="nav-item active">
            <Link to="#navBar" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#inventaire" className="nav-link">
              Inventaire
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#auto" className="nav-link">
              Autos
            </Link>
          </li> 
        </ul>

        <div className="nav-icons d-none d-lg-block">
          <Link to="#" className="nav-icon ">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="nav-icon">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="nav-icon">
            <i className="fab fa-instagram"></i>
          </Link>
        </div> 
      </div> 

    </nav>


  );
};

export default NavBar;
