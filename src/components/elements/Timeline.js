import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content, location } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}<br/>{location}</h3>
          {content.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
