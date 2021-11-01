import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const experienceData = [
  {
    id: 1,
    title: "Data Wrangler",
    location: "John Deere, Iowa City IA",
    years: "4/2021 - Present",
    content: [
      "Improved Parameter Analytics Team overall performance by automating crucialtasks utilizing a combination of Python, SAP GUI ScriptingAPIs, SQL, DB2, and SAP HANA. ",
      "Resolved data quality, enablement, and integrity issues by leveraging mathematical and statisticaltechniques to integrate, ingest, compile, clean,organize,and transform datasetsfrom multiple data sources forquantitative analysisand automation support. ",
      "Streamlined onboarding and training by developing training documents and practices, acting as an integral resource for anything involving Data Structures, Algorithms, Object-Oriented Programming, Probability & Statistics, Database Management, Data Visualization, DevOps, or Cloud Computing. ",
    ],
  },
  {
    id: 2,
    title: "Web Developer Intern",
    location: "PEAK Degrees, Chicago IL",
    years: "10/2019 - 8/2020",
    content: [
      "Developed 27 mobile friendly, responsive web apps utilizing Squarespace, JavaScript, HTML, and CSS for a wide variety of brands including large names like GoOats, Ford Gum, Strassburger Steaks, as well as family businesses and clinics.",
      "Generated over 430,000 unique viewers, 1,000,000 page views, and $640,000 for clients across the many ecommerce, blog, and homepage websites detailed in my portfolio over 10 months.",
      "Increased web development team performance by 25% through helping facilitate a transition to a scrum development cycle using Trello integrated with Slack.",
    ],
  },
  {
    id: 3,
    title: "Summer Intern",
    location: "LAMCO Slings & Riggings, Moline IL",
    years: "6/2017 - 8/2017",
    content: [
      "Increased team productivity by 20% by formatting, creating, and maintaining Creo CAD design projects.",
      "Upheld company relations and offsite operations by replacing or exchanging parts with clients across Iowa and Illinois.",
      "Ensured OSHA compliance and operator safety by performing physical safety inspections on over 4,000 slings and riggings.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer Apprentice",
    location: "Edgewood Chemical & Biological Center, Rock Island Arsenal",
    years: "6/2016 - 8/2016",
    content: [
      "Organized the software development team by designing, building, and implementing a link management system with C# backend, HTML & CSS frontend, and XML storage which was used daily by the development team.",
      "Earned exceptional marks on my link management project after presenting it to the board of directors at the end of my Science and Engineering Apprenticeship Program (SEAP) program. ",
    ],
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Work Experience" size="60"/>
        <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
          {experienceData.map((experience) => (
            <Timeline key={experience.id} education={experience} />
          ))}
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
