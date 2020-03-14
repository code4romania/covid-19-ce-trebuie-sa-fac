import React from "react";
import covid_all from "../../images/covid_all.svg";
import logo_large from "../../images/logo_large.svg";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="App-content">
      <about-page>
        <section className="has-border-bottom">
          <section-title>
            <img src={covid_all} alt=""></img>
            <h1>Despre proiect</h1>
          </section-title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis
            pretium tincidunt non, morbi. Egestas senectus a egestas massa
            varius orci, tellus non. Sit vel, sollicitudin sit amet. Blandit a
            duis dolor ut risus, posuere sed consectetur. Lorem molestie quam
            nisl, magnis pellentesque eu vel. Tellus amet purus amet
            pellentesque fringilla non adipiscing. Amet, diam leo lacus et
            facilisi. Sed risus nullam cursus et dui nunc tincidunt tortor.
          </p>
          <section-footer>
            <span>Share on</span>
            <a href="https://www.facebook.com/code4romania/">
              <FaFacebook style={{ color: "#3b5998" }} size="30px"></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/company/code4romania/">
              <FaLinkedin style={{ color: "#0e76a8" }} size="30px"></FaLinkedin>
            </a>
            <a href="https://www.instagram.com/code4romania/">
              <FaInstagram
                style={{ color: "#833AB4" }}
                size="30px"
              ></FaInstagram>
            </a>
            <a href="https://twitter.com/code4romania">
              <FaTwitter style={{ color: "#42D2F2" }} size="30px"></FaTwitter>
            </a>
          </section-footer>
        </section>
        <section id="about_section_logo">
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
        <section id="about_section_usefull_instruments">
          <section-title>
            <img src={covid_all} alt=""></img>
            <h1>Instrumente utile</h1>
          </section-title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae rem
            illo vero sunt tenetur possimus corporis non aliquam quaerat?
            Accusantium ipsam, voluptates corporis blanditiis provident suscipit
            quisquam sint id voluptatem!
          </p>
        </section>
      </about-page>
    </div>
  );
};

export default About;
