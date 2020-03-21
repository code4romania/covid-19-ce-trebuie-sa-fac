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
  IncubatedBy
} from "@code4ro/taskforce-fe-components";
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
