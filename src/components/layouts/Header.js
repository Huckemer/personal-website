import React from "react";
import { Link } from "react-scroll";
import Logo from "../elements/Logo";

function Header2({ light, logoSource, toggleMenu, headerToggler, links, logoLinkTo, logoClickable }) {
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
        <Logo logoSource={logoSource}  linkTo={logoLinkTo} clickable={logoClickable}/>
        <nav>
          <ul className="vertical-menu scrollspy">
            {links.map((item) => (
              <li>
                <Link
                  activeClass="active"
                  to={item.section}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <i className={item.icon}></i>
                </Link>
              </li>
            ))}
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
