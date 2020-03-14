import React from "react";
import covid_all from "../../images/covid_all.svg";
import logo_large from "../../images/logo_large.svg";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaSearch
} from "react-icons/fa";
import "./About.scss";

const About = () => {
  return (
    <div className="App-content">
      <div className="about-page">
        <section className="has-border-bottom">
          <div className="section-title">
            <img src={covid_all} alt=""></img>
            <h1>Despre proiect</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis
            pretium tincidunt non, morbi. Egestas senectus a egestas massa
            varius orci, tellus non. Sit vel, sollicitudin sit amet. Blandit a
            duis dolor ut risus, posuere sed consectetur. Lorem molestie quam
            nisl, magnis pellentesque eu vel. Tellus amet purus amet
            pellentesque fringilla non adipiscing. Amet, diam leo lacus et
            facilisi. Sed risus nullam cursus et dui nunc tincidunt tortor.
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
              href="https://www.instagram.com/code4romania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                style={{ color: "#833AB4" }}
                size="30px"
              ></FaInstagram>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis
            pretium tincidunt non, morbi. Egestas senectus a egestas massa
            varius orci, tellus non. Sit vel, sollicitudin sit amet. Blandit a
            duis dolor ut risus, posuere sed consectetur. Lorem molestie quam
            nisl, magnis pellentesque eu vel. Tellus amet purus amet
            pellentesque fringilla non adipiscing. Amet, diam leo lacus et
            facilisi. Sed risus nullam cursus et dui nunc tincidunt tortor.
          </p>
        </section>
        <section className="has-border-bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis
            pretium tincidunt non, morbi. Egestas senectus a egestas massa
            varius orci, tellus non. Sit vel, sollicitudin sit amet. Blandit a
            duis dolor ut risus, posuere sed consectetur. Lorem molestie quam
            nisl, magnis pellentesque eu vel. Tellus amet purus amet
            pellentesque fringilla non adipiscing. Amet, diam leo lacus et
            facilisi. Sed risus nullam cursus et dui nunc tincidunt tortor.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elit, duis pretium.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elit, duis pretium.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elit, duis pretium.
                  </p>
                  <button>Vezi situația curentă </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
