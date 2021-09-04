import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header2 from "../components/layouts/Header2";
import About from "../components/sections/About";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Education from "../components/sections/Education";
import Herosection from "../components/sections/Herosection";
import Works from "../components/sections/Works";

function Homepage2Dark() {
  document.body.classList.add("dark");

  const [toggleMenu, setToggleMenu] = useState(false);
  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-2")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header2
        logoSource="/images/CH.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content-2 open" : "content-2"}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-education">
          <Education />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-brandlogos">
          <Brandlogos />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage2Dark;
