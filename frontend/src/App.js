import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
