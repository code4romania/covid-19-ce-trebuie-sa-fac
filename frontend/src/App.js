import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import { logPageView } from "./analyticsTracker";
import Home from "./components/Home";

import {
  Logo,
  Header,
  DevelopedBy,
  IncubatedBy,
  Banner,
  BackToTop
} from "@code4ro/taskforce-fe-components";
import LogoSvg from "./images/logo.svg";
import gov from "./images/gov.png";
import DSU from "./images/dsu.png";
import "./App.scss";

const About = lazy(() => import("./components/About"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const FooterWrapper = lazy(() => import("./components/Footer"));

const customPartnerLogos = [
  <Logo url="https://www.gov.ro" key="gov">
    <img src={gov} alt="Guvernul României" />
  </Logo>,
  <Logo url="http://www.dsu.mai.gov.ro" key="dsu">
    <img src={DSU} alt="Departamentul pentru Situații de Urgență" />
  </Logo>
];

const MenuItems = [
  <a
    href="https://datelazi.ro/"
    target="_blank"
    rel="noopener noreferrer"
    key={"datelazi"}
  >
    Date la zi
  </a>,
  <a
    href="https://stirioficiale.ro"
    target="_blank"
    rel="noopener noreferrer"
    key={"stiri"}
  >
    Știri oficiale
  </a>,
  <Link to="/despre" key={"des"}>
    Despre
  </Link>
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
      <Header
        Logo={
          <Logo url="/" target="_self">
            <img
              width="178"
              height="32"
              alt="Covid-19. Ce trebuie să fac?"
              src={LogoSvg}
            />
          </Logo>
        }
        MenuItems={MenuItems}
      />
      <DevelopedBy showPartners partnerLogos={customPartnerLogos} />
      <Suspense fallback={<div></div>}>
        <main>
          <Switch>
            <Route path="/despre">
              <About />
            </Route>
            <Route path="/politica-de-confidentialitate">
              <PrivacyPolicy />
            </Route>
            <Route path="/termeni-si-conditii">
              <TermsAndConditions />
            </Route>
            <Route exact path="/:pageSlug?/:subPageSlug?/">
              <Home />
            </Route>
          </Switch>
          <BackToTop />
        </main>
        <IncubatedBy />
        <FooterWrapper />
      </Suspense>
    </>
  );
};

export default AppWrapper;
