import React, { Component } from "react";
import UsefulTools from "../UsefulTools";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="App-content">
        <div className="home-page">
          <div className="top-view"></div>
          <div className="content-view"></div>
          <div className="useful-tools-container">
            <UsefulTools type="list"></UsefulTools>
          </div>
        </div>
      </div>
    );
  }
}
