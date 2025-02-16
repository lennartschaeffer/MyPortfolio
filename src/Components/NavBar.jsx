import { Link } from "react-scroll";
export const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ background: "#17223B" }}
    >
      <a className="navbar-brand font-weight-bold" href="#Home">
        Lennart Schaeffer
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              to="Home"
              className="text-white nav-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              to="About"
              className="text-white nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              to="Projects"
              className="text-white nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              to="Contact"
              className="text-white nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
