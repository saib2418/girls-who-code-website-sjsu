import './App.css';
import { Link } from "react-scroll";

function App() {
  const navbarItems = [{
    id: 1,
    title: 'home'
  },
  {
    id: 2,
    title: 'about'
  },
  {
    id: 3,
    title: 'e-board'
  },
  {
    id: 4,
    title: 'sponsors'
  },
  {
    id: 5,
    title: 'resources'
  },
  {
    id: 6,
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
                <Link to={menu.title} smooth={true} offset={-430} duration={500}>
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

export default App;
