import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { category, title, image, popupLink, link, internal } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  const handleIcon = () => {
    if (link) {
      return <i className="icon-link"></i>;
    } else if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <i className="icon-camrecorder"></i>;
        }
        return <i className="icon-picture"></i>;
      } else if (popupLink.toString().match(/youtube/g)) {
        return <i className="icon-camrecorder"></i>;
      } else {
        return <i className="icon-magnifier-add"></i>;
      }
    }
    return <i className="icon-magnifier-add"></i>;
  };

  if (popupLink && popupLink.toString().match(/youtube/g)) {
    return (
      <>
        <a
          href={popupLink}
          className="work-image"
          rel="noreferrer"
          target="_blank"
        >
          <div className="portfolio-item rounded shadow-dark">
            <div className="details">
              <span className="term text-capitalize">{category}</span>
              <h4 className="title">{title}</h4>
              <span className="more-button">{handleIcon()}</span>
            </div>
            <div className="thumb">
              <img src={image} alt="Portfolio-title" />
              <div className="mask"></div>
            </div>
          </div>
        </a>
        {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
      </>
    );
  }
  else if (internal) {
    return (
      <>
        <a
          href={popupLink}
          href={link}
          className="work-image"
          rel="noreferrer"
        >
          <div className="portfolio-item rounded shadow-dark">
            <div className="details">
              <span className="term text-capitalize">{category}</span>
              <h4 className="title">{title}</h4>
              <span className="more-button">{handleIcon()}</span>
            </div>
            <div className="thumb">
              <img src={image} alt="Portfolio-title" />
              <div className="mask"></div>
            </div>
          </div>
        </a>
        {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
      </>
    );
  }
  else {
    return (
      <>
        <a
          href={link ? link : "!#"}
          className="work-image"
          onClick={handleLightbox}
          rel="noreferrer"
          target="_blank"
        >
          <div className="portfolio-item rounded shadow-dark">
            <div className="details">
              <span className="term text-capitalize">{category}</span>
              <h4 className="title">{title}</h4>
              <span className="more-button">{handleIcon()}</span>
            </div>
            <div className="thumb">
              <img src={image} alt="Portfolio-title" />
              <div className="mask"></div>
            </div>
          </div>
        </a>
        {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
      </>
    );
  }
}

export default Portfolio;
