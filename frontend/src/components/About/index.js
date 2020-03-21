import React from "react";
import logo_large from "../../images/logo_large.svg";
import {
  Hero,
  Instruments,
  SocialsShare
} from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";
import "./About.scss";
import {
  renderInstrumentItem,
  remapInstrumentsData
} from "../../utils/instruments.utils";

const About = () => {
  const instrumentsData = remapInstrumentsData(UsefulApps);

  return (
    <div className="container about-page">
      <section>
        <Hero
          title="Despre proiect"
          useFallbackIcon={true}
          subtitle="Vrem să facem lucrurile mai simple pentru noi toți. Cemafac.ro este un
          ghid cu reguli de interacțiune, acțiune și comportament recomandate în
          această perioadă de criză în care ne confruntăm cu răspândirea foarte
          rapidă a infecției cu coronavirus. Vrem să aducem mai aproape de voi
          regulile de bază recomandate de autorități de la care este indicat să
          nu ne abatem în această perioadă."
        />
        <div>
          <SocialsShare currentPage={"https://cemafac.ro/despre"} />
        </div>
      </section>
      <section className="about-section-logo">
        <img src={logo_large} alt=""></img>
      </section>
      <section className="has-border-bottom has-horizontal-paddding">
        <p>
          cemăfac.ro este o platformă care ajută populația să înțeleagă mai bine
          care sunt regulile ce trebuie respectate în timpul pandemieii
          COVID-19. Un ghid simplu și practic bazat pe scenarii posibile prin
          care populația poate trece. Această platformă te va ghida prin
          situații variate și te va aduce mai aproape de măsurile recomandate
          pentru o mai bună protejare a ta, a familiei și a comunității tale în
          această situație de urgență.
        </p>
      </section>
      <section className="has-border-bottom has-horizontal-paddding">
        <p>
          Platforma cemăfac.ro este construită de Code for Romania Task Force în
          parteneriat cu Guvernul României prin Autoritatea pentru Digitalizarea
          României și Departamentul pentru Situații de Urgență.
        </p>
      </section>
      <section className="about-section-useful-instruments">
        <Hero title={"Instrumente utile"} useFallbackIcon={true} />

        <Instruments layout="grid">
          <section>
            {instrumentsData.info.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
          </section>
          <section>
            {instrumentsData.news.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
          </section>
          <section>
            {instrumentsData.offer_help.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
          </section>
          <section>
            {instrumentsData.data.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
          </section>
        </Instruments>
      </section>
    </div>
  );
};

export default About;
