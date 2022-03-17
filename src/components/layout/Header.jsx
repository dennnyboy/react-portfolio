import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
return (
<header>
  <div className="container container-nav">
    <div className="titles">
      <h1>Dennis Khaperskov</h1>
    </div>
    <nav>
      <ul>
        <li>
          <Link to={"/"} className="navbar-item1">
          About Me
          </Link>
        </li>
        <li>
          <Link to={"/my-work"} className="navbar-item2">
          My Work
          </Link>
        </li>
        <li>
          <Link to={"/contact-me"} className="navbar-item3">
          Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
);
}

export default Header;