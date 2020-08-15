import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })

      var personal = this.props.data.personal.map(function (personal) {
        var personalImage = 'images/personal/' + personal.image;

        return (
          <div key={personal.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={personal.url} title={personal.title} target="_blank">
                <img alt={personal.title} src={personalImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{personal.title}</h5>
                    <p>{personal.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>My Projects Completed at <a target="_blank" href="https://www.peakdegrees.com">PEAK Degrees</a></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>   

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Personal Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {personal}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
