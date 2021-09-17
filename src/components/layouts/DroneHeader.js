import React from "react";
import { Link } from "react-scroll";
import Logo from "../elements/Logo";

function Header2({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-2 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-2";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <header className={handleClasses()}>
        <Logo logoSource={logoSource}  linkTo="/" clickable="true"/>
        <nav>
          <ul className="vertical-menu scrollspy">
          <li>
              <Link
                activeClass="active"
                to="section-me"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-user"></i>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-info"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-info"></i>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-video"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-control-play"></i>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-footage"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-film"></i>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()} Colin Hayes
          </span>
        </div>
      </header>
    </>
  );
}

export default Header2;
