import './Navbar.css';
import { Link } from "react-scroll";

function Navbar() {
  const navbarItems = [{
    id: 0,
    title: ''
  },
  {
    id: 1,
    title: 'about'
  },
  {
    id: 2,
    title: 'e-board'
  },
  {
    id: 3,
    title: 'sponsors'
  },
  {
    id: 4,
    title: 'resources'
  },
  {
    id: 5,
    title: 'contact'
  }
  ]


  return (
    <div className="App">
      <header>
        <nav>
          <h2>GIRLS WHO CODE</h2>
          <ul>
            {navbarItems.map(menu => (
              <li>
                <Link to={menu.title} smooth={true} offset={-450} duration={500}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {navbarItems.map((menu) => (
          <div className="content">
            <h1 className="content-header" id={menu.title}>
              {menu.title}
            </h1>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Navbar;
