import React from "react";
import covid_all from "../../images/covid_all.svg";
import logo_large from "../../images/logo_large.svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Hero,
  Instruments,
  InstrumentsItem,
  SearchInput
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";

import "./About.scss";

const About = () => {
  const renderInstrumentsItemCategory = (data, category) => {
    return data
      .sort((a, b) => {
        return a.display_order - b.display_order;
      })
      .map(usefulApp => {
        return (
          <InstrumentsItem
            key={`useful_app_${usefulApp.doc_id}`}
            color={category}
            title={usefulApp.title}
            content={usefulApp.content}
            ctaText={
              usefulApp.buttons &&
              usefulApp.buttons.length > 0 &&
              usefulApp.buttons[0].title
            }
            onClick={() => {
              if (
                usefulApp.buttons &&
                usefulApp.buttons.length > 0 &&
                usefulApp.buttons[0].link
              ) {
                window.open(usefulApp.buttons[0].link, "_blank");
              }
            }}
          />
        );
      });
  };
  console.log(
    UsefulApps.filter(usefulApp => usefulApp.app_type === "OFFER_HELP")
  );
  return (
    <div className="App-content">
      <div className="about-page">
        <section className="has-border-bottom">
          <div className="section-title">
            <img src={covid_all} alt=""></img>
            <h1>Despre proiect</h1>
          </div>
          <p>
            Vrem să facem lucrurile mai simple pentru noi toți. Cemafac.ro este
            un ghid cu reguli de interacțiune, acțiune și comportament
            recomandate în această perioadă de criză în care ne confruntăm cu
            răspândirea foarte rapidă a infecției cu coronavirus. Vrem să aducem
            mai aproape de voi regulile de bază recomandate de autorități de la
            care este indicat să nu ne abatem în această perioadă.
          </p>
          <div className="section-footer">
            <span>Share on</span>
            <a
              href="https://www.facebook.com/code4romania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={{ color: "#3b5998" }} size="30px"></FaFacebook>
            </a>
            <a
              href="https://www.linkedin.com/company/code4romania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ color: "#0e76a8" }} size="30px"></FaLinkedin>
            </a>
            <a
              href="https://twitter.com/code4romania"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={{ color: "#42D2F2" }} size="30px"></FaTwitter>
            </a>
          </div>
        </section>
        <section className="about-section-logo">
          <img src={logo_large} alt=""></img>
        </section>
        <section className="has-border-bottom">
          <p>
            cemăfac.ro este o platformă care ajută populația să înțeleagă mai
            bine care sunt regulile ce trebuie respectate în timpul pandemieii
            COVID-19. Un ghid simplu și practic bazat pe scenarii posibile prin
            care populația poate trece. Această platformă te va ghida prin
            situații variate și te va aduce mai aproape de măsurile recomandate
            pentru o mai bună protejare a ta, a familiei și a comunității tale
            în această situație de urgență.
          </p>
        </section>
        <section className="has-border-bottom">
          <p>
            Platforma cemăfac.ro este construită de Code for Romania Task Force
            în parteneriat cu Guvernul României prin Autoritatea pentru
            Digitalizarea României și Departamentul pentru Situații de Urgență.
          </p>
        </section>
        <section className="about-section-useful-instruments">
          <Hero title={"Instrumente utile"} useFallbackIcon={true} />

          <Instruments layout="grid">
            <section>
              <SearchInput
                hasIcon={true}
                placeholder={"cauta informatii aici"}
                onValueChange={() => {}}
              />
              {renderInstrumentsItemCategory(
                UsefulApps.filter(usefulApp => usefulApp.app_type === "NEWS"),
                "green"
              )}
            </section>
            <section>
              {renderInstrumentsItemCategory(
                UsefulApps.filter(
                  usefulApp => usefulApp.app_type === "OFFER_HELP"
                ),
                "red"
              )}
            </section>
            <section>
              {renderInstrumentsItemCategory(
                UsefulApps.filter(usefulApp => usefulApp.app_type === "DATA"),
                "pink"
              )}
            </section>
          </Instruments>
        </section>
      </div>
    </div>
  );
};

export default About;
