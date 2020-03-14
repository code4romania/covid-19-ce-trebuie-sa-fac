import React from "react";
import { Link } from "react-router-dom";
import logo_small from "../images/logo_small.svg";
import c4r_logo from "../images/c4r_logo.svg";
import gov_logo from "../images/gov_logo.svg";

const Header = () => {
	return (
		<header className="App-header">
			<top-header>
				<app-logo>
					<Link to="/">
						<img src={logo_small}></img>
					</Link>
				</app-logo>
				<nav>
					<Link to="/despre">Despre proiect</Link>
				</nav>
			</top-header>
			<bottom-header>
				<app-credits>
					<span>Un proiect dezvoltat de</span>
					<a href="https://code4.ro/">
						<img src={c4r_logo}></img>
					</a>
					<span>În parteneriat cu </span>
					<a href="https://www.gov.ro/">
						<img src={gov_logo}></img>
					</a>
				</app-credits>
			</bottom-header>
		</header>
	);
};

export default Header;
