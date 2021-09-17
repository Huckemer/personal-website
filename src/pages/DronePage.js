import React, { useState } from "react";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import Portfolio from "../components/elements/Portfolio";
import Showcase from "../components/sections/Showcase";
import Brandlogos from "../components/sections/Brandlogos";

import Info from "../components/sections/Info";

const aboutMe = [
  {
    title: "",
    subtitle: "",
    text: [
      "I'm an Amateur FPV (First Person View) drone pilot, registered and certified through The Recreational UAS (Unmanned Aircraft Systems) Safety Test (TRUST) administered by the Federal Aviation Administration (FAA). ",
      "FPV drone building involves using embedded systems programming and wiring to integrate a flight controller, electronic speed controller(s), brushless motors, long-range radio receiver, video transmitter, HD camera(s), and a high capacity Lithium Polymer (LiPo) battery onto a small form factor and lightweight 5-inch carbon fiber frame.",
      "FPV drone racing operation involves using a pair of VR goggles and a long-range radio transmitter to fly the small form factor drone at speeds exceeding 60 miles an hour through predetermined checkpoints racing to a finish line."
    ]
  }
];

const aboutFpv = [
  {
    title:
      "FPV Drones Offer The Most Immersive Flying Experience Out There",
    subtitle: "",
    text: [
      "Technically, the differentiating factor between an FPV drone and a normal drone is just a live feed camera but most enthusiasts in the field would disagree. ",
      "The common setup is a small drone, typically 5 inch arms or smaller, with varying components paired with a set of FPV goggles that give you the same perspective as the drone. ",
      "The lightweight carbon fiber frames and high power motors give these smaller drones a level of maneuverability that's not even comparable to a drone you would buy in Best Buy. ",
      "These drones can accelerate faster than sports cars and flip and spin faster than extreme roller coasters, all with your view in the cockpit. ",
    ],
  },
];

const droneVideo = {
  title: "FPV Drone Footage",
  category: "Video",
  image: "images/man with drone.jpg",
  popupLink: ["https://www.youtube.com/watch?v=_CpXa8K1BhI"]
};

const showcaseData = [
  {
    id: 1,
    title: "Footage 1",
    category: "Video",
    image: "images/icons/drone.svg",
    popupLink: ["https://www.redboxdesign.org/"],
  },
]

const headerLinks = [
  {
    section: "section-me",
    icon: "icon-user"
  },
  {
    section: "section-info",
    icon: "icon-info"
  },
  {
    section: "section-video",
    icon: "icon-control-play"
  },
  {
    section: "section-footage",
    icon: "icon-film"
  },
];

function DronePage() {
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
        logoSource="/images/icons/chevron-left.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
        links={headerLinks}
        logoLinkTo="/"
        logoClickable="true"
      />
      <main className={toggleMenu ? "content-2 open" : "content-2"}>
      <Element name="section-me">
          <Info
            pageTitle="About Being An FPV Pilot"
            content={aboutMe}
            logoSource="/images/icons/build.svg"
          />
        </Element>
        <Element name="section-brandlogos">
          <Brandlogos />
        </Element>
        <Element name="section-info">
          <Info
            pageTitle="About FPV Drones"
            content={aboutFpv}
            logoSource="/images/icons/drone-goggle-link.svg"            
            sideView="true"
          />
        </Element>
        <div className="spacer" data-height="60"></div>
        <Element name="section-video">
        <div className="container">          
          <div className="row">
            <div className="col-md-12 triangle-left-md triangle-top-sm">
              <div className="rounded bg-white shadow-dark padding-30">
                <div className="row">
                  <div className="col-md-12">
                    <Portfolio portfolio={droneVideo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Element>
        <div className="spacer" data-height="40"></div>
        <Element name="section-footage">
          <Showcase title="My Footage" allData={showcaseData}/>
        </Element>
        <div className="spacer" data-height="60"></div>
      </main>
    </>
  );
}

export default DronePage;
