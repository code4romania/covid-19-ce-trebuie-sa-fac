import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import covid_all from "../../images/covid_all.svg";
import PropTypes from "prop-types";
import "./UsefulTools.scss";

export default class UsefulTools extends Component {
  static get propTypes() {
    return {
      type: PropTypes.string
    };
  }
  render() {
    const { type = "list" } = this.props;
    return (
      <div
        className={type === "grid" ? "useful-tools-grid" : "useful-tools-list"}
      >
        <div className="section-title">
          <img src={covid_all} alt=""></img>
          <h1>Instrumente utile</h1>
        </div>
        <div className="useful-tools">
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
      </div>
    );
  }
}
