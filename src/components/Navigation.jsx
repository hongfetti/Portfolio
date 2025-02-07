import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
<nav>
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About Me</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    );
}
