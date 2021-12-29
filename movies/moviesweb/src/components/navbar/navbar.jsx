import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="to">
            <h6>
              Movies <span>Web</span>{" "}
            </h6>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/"> Popular movies </a>
              </li>
              <li>
                <a href="/"> latest movies </a>
              </li>
              <li>
                <a href="/"> Tv shows </a>
              </li>
            </ul>
            <form method="POST">
              <input type="text" required placeholder="Search" />
              <button type="submit">Search</button>
            </form>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
