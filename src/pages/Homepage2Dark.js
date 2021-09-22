import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import About from "../components/sections/About";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Education from "../components/sections/Education";
import Herosection from "../components/sections/Herosection";
import Works from "../components/sections/Works";

const worksFilters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "personal",
  },
  {
    id: 3,
    text: "website",
  },
  {
    id: 4,
    text: "drones",
  },
];

const worksData = [
  {
    id: 1,
    title: "RedBox Design",
    category: "website",
    image: "images/websites/Redbox Design.jpg",
    link: "https://www.redboxdesign.org/",
  },
  {
    id: 2,
    title: "GoOats",
    category: "website",
    image: "images/websites/Go Oats.jpg",
    link: "https://www.gooats.life/",
  },
  {
    id: 25,
    title: "FPV Drones",
    category: "drones",
    image: "images/personal/Drone.jpg",
    link: "/drones",
  },
  {
    id: 3,
    title: "Ford Gum",
    category: "website",
    image: "images/websites/Ford Gum.jpg",
    link: "https://fordgum.com/",
  },
  {
    id: 4,
    title: "Strassburger Steaks",
    category: "website",
    image: "images/websites/Strassburger Steaks.jpg",
    link: "http://www.strassburgersteaks.com/",
  },
  {
    id: 5,
    title: "Strassburger Burgers",
    category: "website",
    image: "images/websites/Strassburger Burgers.jpg",
    link: "https://www.therealburger.company/",
  },
  {
    id: 22,
    title: "Vanpool Service System",
    category: "personal",
    image: "images/personal/VanpoolHome.jpg",
    popupLink: "https://github.com/Huckemer/Vanpool-Service-System",
  },
  {
    id: 6,
    title: "Washington Pain Center",
    category: "website",
    image: "images/websites/Washington Pain Center.jpg",
    link: "https://dcpaindoc.com/",
  },
  {
    id: 7,
    title: "The Soccer Architect",
    category: "website",
    image: "images/websites/The Soccer Architect.jpg",
    link: "https://thesoccerarchitect.com/",
  },
  {
    id: 8,
    title: "CF Capital",
    category: "website",
    image: "images/websites/CF Capital.jpg",
    link: "https://www.cfcapllc.com/",
  },
  {
    id: 9,
    title: "Elimo Medical",
    category: "website",
    image: "images/websites/Elimo Medical.jpg",
    link: "https://www.elimomedical.com/",
  },
  {
    id: 21,
    title: "Disaster Stocks",
    category: "personal",
    image: "images/personal/MapBox.jpg",
    popupLink: "https://github.com/dnunez20/DatabaseSystems",
  },
  {
    id: 10,
    title: "Hermosa Advisors",
    category: "website",
    image: "images/websites/Hermosa Advisors.jpg",
    link: "https://www.hermosaadvisors.com/",
  },
  {
    id: 11,
    title: "Colorful Creative Kids",
    category: "website",
    image: "images/websites/Colorful Creative Kids.jpg",
    link: "https://colorfulcreativekids.com/",
  },
  {
    id: 12,
    title: "HomeHookUp",
    category: "website",
    image: "images/websites/HomeHookUp.jpg",
    link: "https://www.homehookup.com/",
  },
  {
    id: 24,
    title: "WaifuBot",
    category: "personal",
    image: "images/personal/Discord.jpg",
    popupLink: "https://github.com/Huckemer",
  },
  {
    id: 26,
    title: "Embedded Systems",
    category: "personal",
    image: "images/personal/Car.jpg",
    popupLink: "Car.jpg",
  },
  {
    id: 13,
    title: "Family Chiropractic",
    category: "website",
    image: "images/websites/Family Chiropractic.jpg",
    link: "https://www.stlchiropractic-acupuncture.com/",
  },
  {
    id: 14,
    title: "Round Here Ranch",
    category: "website",
    image: "images/websites/Round Here Ranch.jpg",
    link: "https://www.roundhereranch.com/",
  },
  {
    id: 23,
    title: "Personal Portfolio Website",
    category: "personal",
    image: "images/personal/React.jpg",
    popupLink: "https://github.com/Huckemer/personal-website",
  },
  {
    id: 15,
    title: "Tempo Global Resources",
    category: "website",
    image: "images/websites/Tempo Global Resources.jpg",
    link: "https://www.tempoglobalresources.com/",
  },
  {
    id: 16,
    title: "GolfBox",
    category: "website",
    image: "images/websites/Golf Box.jpg",
    link: "https://www.golfbox.com/",
  },
  {
    id: 17,
    title: "Maweltra",
    category: "website",
    image: "images/websites/Maweltra.jpg",
    link: "https://www.maweltra.com/",
  },
  {
    id: 18,
    title: "Zaky Law",
    category: "website",
    image: "images/websites/Zaky Law.jpg",
    link: "https://www.zakylaw.com/",
  },
  {
    id: 19,
    title: "Maven Iron Works",
    category: "website",
    image: "images/websites/Maven Iron Works.jpg",
    link: "https://www.mavenironworks.com/",
  },
  {
    id: 20,
    title: "Bintis Bakery",
    category: "website",
    image: "images/websites/Bintis Bakery.jpg",
    link: "https://www.bintisbakery.com/",
  },
];

const headerLinks = [
  {
    section: "section-home",
    icon: "icon-home"
  },
  {
    section: "section-about",
    icon: "icon-user-following"
  },
  {
    section: "section-experiences",
    icon: "icon-briefcase"
  },
  {
    section: "section-education",
    icon: "icon-graduation"
  },
  {
    section: "section-works",
    icon: "icon-layers"
  },
  {
    section: "section-contact",
    icon: "icon-bubbles"
  },
];

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
      <Header
        logoSource="/images/CH.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
        links={headerLinks}
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
          <Works allData={worksData} filters={worksFilters}/>
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
