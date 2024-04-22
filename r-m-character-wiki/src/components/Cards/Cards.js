import React from "react";

const Cards = ({ results }) => {
  let dispaly;

  if (results) {
    dispaly = results.map((x) => {
      let { id, name, image } = x;
      return (
        <div key={id} className="col-4">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="">{name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    dispaly = "No Characters Founds :/";
  }

  return <>{dispaly}</>;
};

export default Cards;
