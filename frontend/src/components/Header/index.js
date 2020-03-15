import React from "react";
import { Link } from "react-router-dom";
import logo_small from "../../images/logo_small.svg";
import c4r_logo from "../../images/c4r_logo.svg";
import gov_logo from "../../images/gov_logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="App-header">
      <div className="top-header">
        <div className="app-logo">
          <Link to="/">
            <img alt="" src={logo_small}></img>
          </Link>
        </div>
        <nav>
          <Link to="/despre">Despre proiect</Link>
        </nav>
      </div>
      <div className="bottom-header">
        <div className="app-credits">
          <span>Un proiect dezvoltat de</span>
          <a href="https://code4.ro/" target="_blank" rel="noopener noreferrer">
            <img alt="" src={c4r_logo}></img>
          </a>
          <span>În parteneriat cu </span>
          <a
            href="https://www.gov.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src={gov_logo}></img>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
