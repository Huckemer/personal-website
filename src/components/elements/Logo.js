import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav, linkTo, clickable}) {
  if (!clickable) {
    return (
      <img src={logoSource} alt=""/>
    )
  }
  
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to={linkTo}>
        <img src={logoSource} alt=""/>
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to={linkTo}>
        <img src={logoSource} alt=""/>
      </Link>
    </div>
  );
}

export default Logo;
