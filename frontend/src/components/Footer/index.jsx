import React from "react";
import { Link } from "react-router-dom";
import code4romania_gray from "../../images/code4romania-gray.svg";
import code4romania_taskforce from "../../images/code4romania-taskforce.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="footer-bar">
        <label>proiect incubat în programul</label>
        <a
          href="https://code4.ro/ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={code4romania_taskforce}
            alt="Code for Romania task force logo"
          ></img>
        </a>
      </div>
      <div className="footer-content">
        <ul className="useful-links">
          <li>Linkuri utile</li>
          <li>
            <Link to="/termeni-si-conditii">Termeni și condiții</Link>
          </li>
          <li>
            <Link to="/politica-confidentialitate">
              Politică de confidențialitate
            </Link>
          </li>
          <li>
            <a
              href="https://code4.ro/ro/codul-de-conduita/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codul de Conduită
            </a>
          </li>
          <li>
            <a
              href="https://code4.ro/ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code for Romania
            </a>
          </li>
          <li>
            <a href="mailto:contact@code4.ro">Contact</a>
          </li>
        </ul>
        <div className="code4-branding">
          <a
            href="https://code4.ro/ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={code4romania_gray} alt="Code for Romania gray logo"></img>
          </a>
          <p>© 2020 Code for Romania.</p>
          <p>
            Organizație neguvernamentală independentă, neafiliată politic și
            apolitică.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
