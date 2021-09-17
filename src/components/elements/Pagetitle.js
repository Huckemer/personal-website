import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Pagetitle({ title, size }) {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >
        <h2 className="section-title">{title}</h2>
      </ScrollAnimation>
      <div className="spacer" data-height={size}></div>
    </>
  );
}

export default Pagetitle;
