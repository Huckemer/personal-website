import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/logos/python.svg",
  },
  {
    id: 2,
    image: "images/logos/dji-goggles.svg",
  },
  {
    id: 3,
    image: "images/logos/aws.svg",
  },
  {
    id: 4,
    image: "images/logos/squarespace.svg",
  },
  {
    id: 5,
    image: "images/logos/java.svg",
  },
  {
    id: 6,
    image: "images/logos/vs-code.svg",
  },
  {
    id: 7,
    image: "images/logos/reactjs.svg",
  },
  {
    id: 8,
    image: "images/logos/drone.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
