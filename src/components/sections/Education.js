import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "B.S. Computer Science",
    secondary: "Minor Mathematics",
    location: "University of Iowa",
    years: "8/2017 - 12/2020",
    content: [
      "Elected ACM Student Chapter Vice President (2020-2021)",
      "Elected ACM Student Chapter Secretary & Treasurer (2019-2020)",
      "Elected Associated Residence Hall Petersen Senator (2017-2018)",
    ],
  },
  {
    id: 2,
    title: "High School",
    location: "Davenport Central High School",
    years: "8/2013 - 6/2017",
    content: [
      "Davenport Central Jim Fox Award",
      "National Honor Society Member (2017)",
    ],
  },
];

function Education() {
  return (
    <section id="education">
      <div className="container">
        <Pagetitle title="Education" size="60"/>
        <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
          {educationData.map((education) => (
            <Timeline key={education.id} education={education} />
          ))}
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}

export default Education;
