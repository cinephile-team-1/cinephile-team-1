import React from "react";
import Navbar from "./Navbar";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">CINEPHILE</div>

        <Navbar />

        <div className="header__auth">
          <button className="header__btn header__btn--login">Sign In</button>
          <button className="header__btn header__btn--access">
            Get Access
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
