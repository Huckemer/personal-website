import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3><a href={education.link}>{education.school}</a></h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <ul>
            {education.description.map(item => (
              <span style={{ "list-style-type": "circle", "text-align": "left" }}><li key={item}>{item}</li></span>
            ))}
          </ul></div>
      })

      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3><a href={work.link} target="_blank">{work.company}</a></h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <ul>
            {work.description.map(item => (
              <span style={{ "list-style-type": "circle", "text-align": "left" }}><li key={item}>{item}</li></span>
            ))}
          </ul>
        </div>
      })

      var skills = this.props.data.skills.map((skills) => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level, backgroundColor: this.getRandomColor() }} className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var tools = this.props.data.tools.map((tools) => {
        var className = 'bar-expand ' + tools.name.toLowerCase();
        return (
          <li key={tools.name}>
            <span style={{ width: tools.level, backgroundColor: this.getRandomColor() }} className={className}></span><em>{tools.name}</em>
          </li>
        )
      })

      var achievements = this.props.data.achievements.map(function (achievements) {
        var achievementImage = 'images/achievements/' + achievements.image;

        return (
          <div key={achievements.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={achievements.url} title={achievements.title} target="_blank">
                <img alt={achievements.title} src={achievementImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{achievements.title}</h5>
                    <p>{achievements.description}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Languages</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Tools</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">
              <ul className="tools">
                {tools}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="twelve columns collapsed">

            <h1 style={{ "padding-bottom": "30px" }}>Achievements & Awards</h1>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {achievements}
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
