import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/hompage/index";
import Navbar from "./components/navbar/navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
