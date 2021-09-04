import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  avatarImage: "/images/profilepic-circular.png",
  // avatarImage: "/images/avatar-2.svg",
  content:
    "I'm an aspiring Data Scientist who's friends call Huckemer, currently working remotely as a Data Wrangler at John Deere. Outside of work, I like building things whether it's with wood or wires or both, and being outside flying my drone, golfing, hiking, or running.",
};

const progressData = [
  {
    id: 1,
    title: "Web Development",
    percantage: 95,
    progressColor: "#6FC1FE",
  },
  {
    id: 2,
    title: "Data Science",
    percantage: 95,
    progressColor: "#66C8B0",
  },
  {
    id: 3,
    title: "Drone Badassery",
    percantage: 110,
    progressColor: "#E78972",
  },
];

const counterData = [
  {
    id: 1,
    title: "Web Projects",
    count: 27,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Page Views",
    count: 1000000,
    icon: "icon-graph",
  },
  {
    id: 3,
    title: "Hackathon Medals",
    count: 3,
    icon: "icon-badge",
  },
  {
    id: 4,
    title: "Drones Crashed",
    count: 4,
    icon: "icon-speedometer",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left" border-radius="50%">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/ColinHayesResume.pdf" className="btn btn-default" target="_blank">
                      Download Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
