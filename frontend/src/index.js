import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./App";
import * as serviceWorker from "./serviceWorker";
import "@code4ro/taskforce-fe-components/dist/index.css";
import { initializeGA } from "./analyticsTracker";

initializeGA();
ReactDOM.render(<AppWrapper />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
