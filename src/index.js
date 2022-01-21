import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
