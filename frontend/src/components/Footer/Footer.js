import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterLinkHeader,
  FooterLinks,
  FooterLinkItem
} from "@code4ro/taskforce-fe-components";

const MyFooter = () => {
  return (
    <Footer>
      <FooterLinks>
        <FooterLinkHeader>Linkuri utile</FooterLinkHeader>
        <FooterLinkItem>
          <Link to="/despre"> Despre</Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://code4.ro/ro/apps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Ecosistemul Covid-19
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/covid-19-%C8%99tiri-oficiale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Instalează add-on-ul Firefox
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://chrome.google.com/webstore/detail/pdcpkplohipjhdfdchpmgekifmcdbnha"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Instalează add-on-ul Chrome
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://datelazi.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Date la zi
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://stirioficiale.ro/informatii"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Știri Oficiale
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://stamacasa.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Stăm acasă
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://diasporahub.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Diaspora Hub
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://rohelp.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            RO help
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://code4.ro/ro/doneaza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Sprijină proiectul
          </a>
        </FooterLinkItem>
      </FooterLinks>
    </Footer>
  );
};

export default MyFooter;
