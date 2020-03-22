import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import { logPageView } from "./analyticsTracker";
import FooterWrapper from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import {
  Header,
  DevelopedBy,
  IncubatedBy,
  Banner
} from "@code4ro/taskforce-fe-components";
import LogoSvg from "./images/logo.svg";
import "./App.scss";

const Logo = () => (
  <Link to="/">
    <img width="145" height="32" alt="" src={LogoSvg} />
  </Link>
);

const MenuItems = [
  <Link to="/despre" key={"des"}>
    Despre
  </Link>
  /*,
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
  </a> */
];

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  const history = useHistory();
  useEffect(() => {
    logPageView(history);
  }, [history]);

  return (
    <>
      <Banner
        title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. "
        link="https://stirioficiale.ro/15-recomandari-privind-conduita-sociala-responsabila-in-prevenirea-raspandirii-coronavirus"
      />
      <Header Logo={Logo()} MenuItems={MenuItems} />
      <DevelopedBy showSecondLine={true} />
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
        <Route exact path="/:slug?/">
          <Home />
        </Route>
      </Switch>
      <IncubatedBy />
      <FooterWrapper />
    </>
  );
};

export default AppWrapper;
