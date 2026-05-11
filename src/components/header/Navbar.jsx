import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--active">Movies</li>
        <li className="navbar__item">Pricing</li>
        <li className="navbar__item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
