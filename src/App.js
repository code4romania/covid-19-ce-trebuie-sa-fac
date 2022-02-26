import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { logPageView } from "./analyticsTracker";
import Home from "./components/Home";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { en, ro, uk, ru } from "make-plural/plurals";
import { messages as messagesRo } from "./locales/ro/messages";
import { Trans } from "@lingui/macro";

import {
  Logo,
  Header,
  DevelopedBy,
  IncubatedBy,
  BackToTop,
} from "@code4ro/taskforce-fe-components";
import LogoSvg from "./images/logo.svg";
import gov from "./images/gov.png";
import DSU from "./images/dsu.png";
import "./App.scss";
import { LanguageMenu } from "./components/LanguageMenu";

const About = lazy(() => import("./components/About"));
const Conduita = lazy(() => import("./components/Conduita"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const FooterWrapper = lazy(() => import("./components/Footer"));

i18n.loadLocaleData({
  en: { plurals: en },
  ro: { plurals: ro },
  uk: { plurals: uk },
  ru: { plurals: ru },
});
i18n.load({
  ro: messagesRo,
});
i18n.activate("ro");

const customPartnerLogos = [
  <Logo url="https://www.gov.ro" key="gov">
    <img src={gov} alt="Guvernul României" />
  </Logo>,
  <Logo url="http://www.dsu.mai.gov.ro" key="dsu">
    <img src={DSU} alt="Departamentul pentru Situații de Urgență" />
  </Logo>,
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
  <Link to="/conduita" key={"cond"}>
    Conduită
  </Link>,
  <Link to="/despre" key={"des"}>
    <Trans>Despre</Trans>
  </Link>,
  <LanguageMenu key="language" />,
];

const AppWrapper = () => {
  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      <Router>
        <App />
      </Router>
    </I18nProvider>
  );
};

const App = () => {
  const history = useHistory();
  useEffect(() => {
    logPageView(history);
  }, [history]);

  return (
    <>
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
            <Route path="/conduita">
              <Conduita />
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
