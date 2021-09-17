import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Logo from "../elements/Logo";

function Info({ pageTitle, content, logoSource, sideView }) {
  if (sideView) {
    return (
      <section id="about">
        <div className="container">
          <Pagetitle title={pageTitle} size="40" />
          <div className="row">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-9">
                  {content.map((item) => (
                    <div>
                      <h2>{item.title}</h2>
                      <h3>{item.subtitle}</h3>
                      {item.text.map((line) => (
                        <p>{line}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="col-md-3">
                  <div className="spacer" data-height="60"/>
                  <Logo logoSource={logoSource} />
                </div>
              </div>
            </div>
          </div>
          <div className="spacer" data-height="50"></div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="about">
        <div className="container">
          <Pagetitle title={pageTitle} size="40" />
          <div className="row">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  {content.map((item) => (
                    <div>
                      <h2>{item.title}</h2>
                      <h3>{item.subtitle}</h3>
                      {item.text.map((line) => (
                        <p>{line}</p>
                      ))}
                    </div>
                  ))}
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  />
                  <Logo logoSource={logoSource} />
                </div>
              </div>
            </div>
          </div>
          <div className="spacer" data-height="50"></div>
        </div>
      </section>
    );
  }
}

export default Info;
