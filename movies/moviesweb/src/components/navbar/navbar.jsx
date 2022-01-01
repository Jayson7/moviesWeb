import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./navbar.css";
import Popular from "../popular/popular";
import Homepage from "../hompage/index";

class Navbars extends Component {
  render() {
    return (
      <div>
        <div className="topper">
          <h6>
            Movies<span>Web</span>
          </h6>
        </div>
        <header>
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/ ">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/popular">
                      Popular movies
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="/">
                      Tv Shows
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>

            {/* routes   starts here*/}

            <Routes>
              <Route exact path="/" element={<Homepage />} />

              <Route exact path="/popular" element={<Popular />} />
            </Routes>

            {/* routes ends here */}
          </Router>
        </header>
      </div>
    );
  }
}

export default Navbars;
