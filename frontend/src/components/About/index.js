import React from "react";
import logo from "../../images/logo.svg";
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
    <>
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
          <img src={logo} alt=""></img>
        </section>
        <section className="has-border-bottom has-horizontal-paddding">
          <p>
            cemăfac.ro este o platformă care ajută populația să înțeleagă mai
            bine care sunt regulile ce trebuie respectate în timpul pandemieii
            COVID-19. Un ghid simplu și practic, redactat pe înțelesul tuturor
            cu sprijinul&nbsp;
            <a
              href="https://www.facebook.com/comunicarenonprofit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brigăzii de Comunicare Nonprofit
            </a>
            , avizat de&nbsp;
            <a
              href="http://www.dsu.mai.gov.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Departamentul pentru Situații de Urgență
            </a>
            , bazat pe scenarii posibile prin care populația poate trece.
            Această platformă te va ghida prin situații variate și te va aduce
            mai aproape de măsurile recomandate pentru o mai bună protejare a
            ta, a familiei și a comunității tale în această situație de urgență.
          </p>
        </section>
        <section className="has-border-bottom has-horizontal-paddding">
          <p>
            Platforma cemăfac.ro este construită de Code for Romania Task Force
            în parteneriat cu&nbsp;
            <a
              href="https://www.gov.ro/"
              target="_blank"
              rel="noopener noreferrer"
            > Guvernul României
            </a>
            , prin&nbsp;
            <a
              href="https://www.aadr.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >  Autoritatea pentru Digitalizarea României
            </a>
            , și&nbsp;
            <a
              href="http://www.dsu.mai.gov.ro/"
              target="_blank"
              rel="noopener noreferrer"
            > Departamentul pentru Situații de Urgență
            </a>
          </p>
        </section>
      </div>
      <div className="sponsors">
        <p>
          <strong>
            Programul Code for Romania Task Force este susținut de:&nbsp;
          </strong>
        </p>
        <p>&nbsp;</p>
        <p>
          <img
            src="/images/banda_sponsori.png"
            alt=""
            width="550"
            height="98"
          />
        </p>
      </div>
      <div className="container about-page">
        <aside className="about-section-useful-instruments">
          <Hero title={"Instrumente utile"} useFallbackIcon={true} />

          <Instruments layout="grid">
            {instrumentsData.info.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.news.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.offer_help.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.data.map(usefulApp =>
              renderInstrumentItem(usefulApp)
            )}
          </Instruments>
        </aside>
      </div>
    </>
  );
};

export default About;
