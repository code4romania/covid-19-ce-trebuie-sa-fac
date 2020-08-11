import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterLinkHeader,
  FooterLinks,
  FooterLinkItem,
} from "@code4ro/taskforce-fe-components";

const FooterWrapper = () => {
  return (
    <Footer>
      <FooterLinks>
        <FooterLinkHeader>Link-uri utile</FooterLinkHeader>
        <FooterLinkItem>
          <Link to="/despre">Despre proiect</Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://stirioficiale.ro/informatii"
            target="_blank"
            rel="noopener noreferrer"
          >
            Știri Oficiale
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://www.gov.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guvernul României
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="http://www.dsu.mai.gov.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Departamentul pentru Situații de Urgență
          </a>
        </FooterLinkItem>
      </FooterLinks>
      <FooterLinks>
        <FooterLinkItem>
          <a
            href="http://www.code4.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code for Romania
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a
            href="https://github.com/code4romania/ce-ma-fac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codul sursă în GitHub
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/termeni-si-conditii">Termeni și condiții</Link>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/politica-de-confidentialitate">
            Politică de confidențialitate
          </Link>
        </FooterLinkItem>
      </FooterLinks>
    </Footer>
  );
};

export default FooterWrapper;
