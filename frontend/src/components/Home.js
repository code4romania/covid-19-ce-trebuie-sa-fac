import React from "react";
import DecisionTree from "./DecisionTree";
import Data from "./mock.json";

const Home = () => {
  return (
    <div className="App-content">
      <h1>Acasa</h1>
      <DecisionTree data={Data}></DecisionTree>
    </div>
  );
};

export default Home;
