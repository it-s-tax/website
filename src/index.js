import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import './App.css';
import "./assets/scss/style.scss";

const history = createBrowserHistory();

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL} history={history}>
    <RenderAfterNavermapsLoaded ncpClientId={"agzqa6txmk"}>
      <App />
    </RenderAfterNavermapsLoaded>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
