import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import Homepage from "./components/hompage/index";
import Navbars from "./components/navbar/navbar.jsx";
// import Popular from "./components/popular/popular";

ReactDOM.render(
  <React.StrictMode>
    <Navbars />
    <Homepage /> {/* <Popular /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
