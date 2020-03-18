import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FooterWrapper from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import { Header, DevelopedBy } from "@code4ro/taskforce-fe-components";
import LogoSvg from "./images/logo_small.svg";
import "./App.scss";

const Logo = () => (
  <Link to="/">
    <img alt="" src={LogoSvg} />
  </Link>
);

const MenuItems = [
  <Link to="/despre" key={"des"}>
    Despre
  </Link>,
  <a
    href="https://code4.ro/ro/apps/"
    target="_blank"
    rel="noopener noreferrer"
    key={"eco"}
  >
    Ecosistemul Covid-19
  </a>,
  <a
    href="https://code4.ro/ro/doneaza/"
    target="_blank"
    rel="noopener noreferrer"
    key={"don"}
  >
    Sprijină proiectul
  </a>
];

function App() {
  return (
    <Router>
      <Header Logo={Logo()} MenuItems={MenuItems} />
      <DevelopedBy />
      <Switch>
        <Route path="/despre">
          <About />
        </Route>
        <Route path="/politica-confidentialitate">
          <PrivacyPolicy />
        </Route>
        <Route path="/termeni-si-conditii">
          <TermsAndConditions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FooterWrapper />
    </Router>
  );
}

export default App;
