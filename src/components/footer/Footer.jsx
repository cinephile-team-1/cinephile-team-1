import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__logo">CINEPHILE.</div>
          <div className="footer__tagline">PRECISION ENGINEERED STREAMING.</div>
        </div>

        <div className="footer__links">
          <a href="#" className="footer__link">
            PRIVACY POLICY
          </a>
          <a href="#" className="footer__link">
            TERMS OF SERVICE
          </a>
          <a href="#" className="footer__link">
            HELP CENTER
          </a>
          <a href="#" className="footer__link">
            API
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
