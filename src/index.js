import React from "react";
import ReactDOM from "react-dom";

import "normalize.css"; // Normalize CSS - always goes before other CSS
import "./index.scss";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
