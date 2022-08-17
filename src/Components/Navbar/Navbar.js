import './Navbar.css';
import { Link } from "react-scroll";

function Navbar() {

  return (
    <div className="App">
      <header>
        <nav>
          <h2>GIRLS WHO CODE</h2>
          <ul>

            <li><a href="/about.js"><Link to="about" spy={true} smooth={true} duration={500}>About</Link></a></li>
            <li><a href="/events.js"><Link to="events" spy={true} smooth={true} duration={500}>Events</Link></a></li>
            <li><a href="/eboard.js"><Link to="eboard" spy={true} smooth={true} duration={500}>E-Board</Link></a></li>
            <li><a href="/sponsors.js"><Link to="sponsors" spy={true} smooth={true} duration={500}>Sponsors</Link></a></li>
            <li><a href="/resources.js"><Link to="resources" spy={true} smooth={true} duration={500}>Resources</Link></a></li>
          </ul>
        </nav>
      </header>
    </div>


  );
}

export default Navbar;
