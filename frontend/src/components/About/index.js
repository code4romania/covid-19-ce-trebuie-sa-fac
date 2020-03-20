import React from "react";
import covid_all from "../../images/covid_all.svg";
import logo_large from "../../images/logo_large.svg";
import { FaFacebook, FaLinkedin, FaTwitter, FaSearch } from "react-icons/fa";
import { SocialsShare } from "@code4ro/taskforce-fe-components";
import "./About.scss";

const About = () => {
  return (
    <div className="container about-page">
      <section>
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
        <div>
          <SocialsShare currentPage={"https://cemafac.ro/despre"} />
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
        <div className="section-title">
          <img src={covid_all} alt=""></img>
          <h1>Instrumente utile</h1>
        </div>
        <div className="useful-instruments">
          <section>
            <div className="search-bar">
              <input placeholder="caută informații aici"></input>
              <FaSearch size="18px"></FaSearch>
            </div>
            <div className="info-card info-card-news">
              <div className="card-title">
                Instalează-ți add-on-ul de depistat știrile false
              </div>
            </div>
            <div className="info-card info-card-news">
              <div className="card-title">
                Stiri oficiale si informații la zi
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  duis pretium.
                </p>
                <button>Cele mai noi informații oficiale</button>
              </div>
            </div>
          </section>
          <section>
            <div className="info-card info-card-help">
              <div className="card-title">Vrei să ajuți. Intră aici</div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  duis pretium.
                </p>
                <button>Centrul de sprijin</button>
              </div>
            </div>
          </section>
          <section>
            <div className="info-card info-card-data">
              <div className="card-title">Date în timp real</div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  duis pretium.
                </p>
                <button>Vezi situația curentă </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
