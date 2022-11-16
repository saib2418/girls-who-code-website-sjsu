import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../img/gwclogo.png";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav class="NavbarItems">
        <h1 class="navbar-logo">
          {" "}
          <img
            className="navbar-logo-img"
            src={logo}
            to="slideshow"
            spy={true}
            smooth={true}
            duration={500}></img>
        </h1>

        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          <li>
            <Link
              className="nav-links"
              to="about"
              spy={true}
              smooth={true}
              duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              to="events"
              spy={true}
              smooth={true}
              duration={500}>
              Events
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              to="eboard"
              spy={true}
              smooth={true}
              duration={500}>
              Team
            </Link>
          </li>
          {/* <li><Link className="nav-links" to="sponsors" spy={true} smooth={true} duration={500}>Sponsors</Link></li> */}
          <li>
            <Link
              className="nav-links"
              to="resources"
              spy={true}
              smooth={true}
              duration={500}>
              Resources
            </Link>
          </li>
          <li>
            <Link
              className="nav-links"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
