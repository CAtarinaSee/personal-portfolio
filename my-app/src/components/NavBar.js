import "../App.css";
import "../assets/css/navbar.css";
import "../assets/css/variables.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
