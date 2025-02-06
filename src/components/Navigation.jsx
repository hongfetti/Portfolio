import { Link } from 'react-router-dom';

export default function Nav() {
    return (
<nav>
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/About">About Me</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Resume">Resume</Link>
          </li>
        </ul>
      </nav>
    );
}
