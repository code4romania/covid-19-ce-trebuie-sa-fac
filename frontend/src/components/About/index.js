import React from "react";
import covid_all from "../../images/covid_all.svg";
import logo_large from "../../images/logo_large.svg";
import "./About.scss";
import UsefulTools from "../UsefulTools";
import SocialsShare from "../SocialsShare";

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
            <SocialsShare
              currentPage={
                window.location.protocol +
                "//" +
                window.location.host +
                "/despre"
              }
            ></SocialsShare>
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
          <UsefulTools type="grid"></UsefulTools>
        </section>
      </div>
    </div>
  );
};

export default About;
