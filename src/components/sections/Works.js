import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "personal",
  },
  {
    id: 3,
    text: "website",
  },
  {
    id: 4,
    text: "drones",
  },
];

const allData = [
  {
    id: 1,
    title: "RedBox Design",
    category: "website",
    image: "images/websites/Redbox Design.jpg",
    link: "https://www.redboxdesign.org/",
  },
  {
    id: 2,
    title: "GoOats",
    category: "website",
    image: "images/websites/Go Oats.jpg",
    link: "https://www.gooats.life/",
  },
  {
    id: 3,
    title: "Ford Gum",
    category: "website",
    image: "images/websites/Ford Gum.jpg",
    link: "https://fordgum.com/",
  },
  {
    id: 4,
    title: "Strassburger Steaks",
    category: "website",
    image: "images/websites/Strassburger Steaks.jpg",
    link: "http://www.strassburgersteaks.com/",
  },
  {
    id: 5,
    title: "Strassburger Burgers",
    category: "website",
    image: "images/websites/Strassburger Burgers.jpg",
    link: "https://www.therealburger.company/",
  },
  {
    id: 6,
    title: "Washington Pain Center",
    category: "website",
    image: "images/websites/Washington Pain Center.jpg",
    link: "https://dcpaindoc.com/",
  },
  {
    id: 7,
    title: "The Soccer Architect",
    category: "website",
    image: "images/websites/The Soccer Architect.jpg",
    link: "https://thesoccerarchitect.com/",
  },
  {
    id: 8,
    title: "CF Capital",
    category: "website",
    image: "images/websites/CF Capital.jpg",
    link: "https://www.cfcapllc.com/",
  },
  {
    id: 9,
    title: "Elimo Medical",
    category: "website",
    image: "images/websites/Elimo Medical.jpg",
    link: "https://www.elimomedical.com/",
  },
  {
    id: 10,
    title: "Hermosa Advisors",
    category: "website",
    image: "images/websites/Hermosa Advisors.jpg",
    link: "https://www.hermosaadvisors.com/",
  },
  {
    id: 11,
    title: "Colorful Creative Kids",
    category: "website",
    image: "images/websites/Colorful Creative Kids.jpg",
    link: "https://colorfulcreativekids.com/",
  },
  {
    id: 12,
    title: "HomeHookUp",
    category: "website",
    image: "images/websites/HomeHookUp.jpg",
    link: "https://www.homehookup.com/",
  },
  {
    id: 13,
    title: "Family Chiropractic",
    category: "website",
    image: "images/websites/Family Chiropractic.jpg",
    link: "https://www.stlchiropractic-acupuncture.com/",
  },
  {
    id: 14,
    title: "Round Here Ranch",
    category: "website",
    image: "images/websites/Round Here Ranch.jpg",
    link: "https://www.roundhereranch.com/",
  },
  {
    id: 15,
    title: "Tempo Global Resources",
    category: "website",
    image: "images/websites/Tempo Global Resources.jpg",
    link: "https://www.tempoglobalresources.com/",
  },
  {
    id: 16,
    title: "GolfBox",
    category: "website",
    image: "images/websites/Golf Box.jpg",
    link: "https://www.golfbox.com/",
  },
  {
    id: 17,
    title: "Maweltra",
    category: "website",
    image: "images/websites/Maweltra.jpg",
    link: "https://www.maweltra.com/",
  },
  {
    id: 18,
    title: "Zaky Law",
    category: "website",
    image: "images/websites/Zaky Law.jpg",
    link: "https://www.zakylaw.com/",
  },
  {
    id: 19,
    title: "Maven Iron Works",
    category: "website",
    image: "images/websites/Maven Iron Works.jpg",
    link: "https://www.mavenironworks.com/",
  },
  {
    id: 20,
    title: "Bintis Bakery",
    category: "website",
    image: "images/websites/Bintis Bakery.jpg",
    link: "https://www.bintisbakery.com/",
  },
  {
    id: 21,
    title: "Disaster Stocks",
    category: "personal",
    image: "images/personal/MapBox.jpg",
    popupLink: "https://github.com/dnunez20/DatabaseSystems",
  },
  {
    id: 22,
    title: "Vanpool Service System",
    category: "personal",
    image: "images/personal/VanpoolHome.jpg",
    popupLink: "https://github.com/Huckemer/Vanpool-Service-System",
  },
  {
    id: 23,
    title: "Personal Portfolio Website",
    category: "personal",
    image: "images/personal/React.jpg",
    popupLink: "https://github.com/Huckemer/personal-website",
  },
  {
    id: 24,
    title: "WaifuBot",
    category: "personal",
    image: "images/personal/Discord.jpg",
    popupLink: "https://github.com/Huckemer",
  },
  {
    id: 25,
    title: "FPV Drones",
    category: "personal",
    image: "images/personal/Drone.jpg",
    popupLink: "Drone.jpg",
  },
  {
    id: 26,
    title: "Embedded Systems",
    category: "personal",
    image: "images/personal/Car.jpg",
    popupLink: "Car.jpg",
  },
];



// const allData = [
//   {
//     id: 1,
//     title: "Project Managment Illustration",
//     category: "art",
//     image: "images/works/1.svg",
//     popupLink: ["images/works/1.svg"],
//   },
//   {
//     id: 2,
//     title: "Guest App Walkthrough Screens",
//     category: "creative",
//     image: "images/works/2.svg",
//     popupLink: [
//       "images/works/2.svg",
//       "images/works/5.svg",
//       "images/works/6.svg",
//     ],
//   },
//   {
//     id: 3,
//     title: "Delivery App Wireframe",
//     category: "branding",
//     image: "images/works/3.svg",
//     popupLink: ["https://www.youtube.com/watch?v=qf9z4ulfmYw"],
//   },
//   {
//     id: 4,
//     title: "Onboarding Motivation",
//     category: "creative",
//     image: "images/works/4.svg",
//     popupLink: [
//       "https://www.youtube.com/watch?v=URVHRhBSjj8",
//       "https://www.youtube.com/watch?v=qf9z4ulfmYw",
//     ],
//   },
//   {
//     id: 5,
//     title: "iMac Mockup Design",
//     category: "art",
//     image: "images/works/5.svg",
//     popupLink: ["images/works/5.svg"],
//   },
//   {
//     id: 6,
//     title: "Game Store App Concept",
//     category: "design",
//     image: "images/works/6.svg",
//     link: "https://dribbble.com",
//   },
//   {
//     id: 7,
//     title: "Project Managment Illustration",
//     category: "art",
//     image: "images/works/3.svg",
//     link: "https://pinterest.com",
//   },
//   {
//     id: 8,
//     title: "Guest App Walkthrough Screens",
//     category: "design",
//     image: "images/works/1.svg",
//     popupLink: ["images/works/1.svg"],
//   },
//   {
//     id: 9,
//     title: "Delivery App Wireframe",
//     category: "branding",
//     image: "images/works/4.svg",
//     popupLink: ["images/works/4.svg"],
//   },
//   {
//     id: 10,
//     title: "Game Store App Concept",
//     category: "design",
//     image: "images/works/6.svg",
//     link: "https://dribbble.com",
//   },
//   {
//     id: 11,
//     title: "Project Managment Illustration",
//     category: "art",
//     image: "images/works/3.svg",
//     link: "https://pinterest.com",
//   },
//   {
//     id: 12,
//     title: "Guest App Walkthrough Screens",
//     category: "design",
//     image: "images/works/1.svg",
//     popupLink: ["images/works/1.svg"],
//   },
//   {
//     id: 13,
//     title: "Delivery App Wireframe",
//     category: "branding",
//     image: "images/works/4.svg",
//     popupLink: ["images/works/4.svg"],
//   },
// ];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(6);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load More
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
