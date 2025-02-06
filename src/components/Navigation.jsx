export default function Nav() {
    return (
<nav>
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Resume</a>
          </li>
        </ul>
      </nav>
    );
}
