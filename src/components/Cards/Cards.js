import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let dispaly;

  if (results) {
    dispaly = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 
          col-md-6 col-12
          mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`img-fluid ${styles.img}`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`position-absolute badge bg-danger ${styles.badge}`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`position-absolute badge bg-success ${styles.badge}`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`position-absolute badge bg-secondary ${styles.badge}`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    dispaly = "No Characters Founds :/";
  }

  return <>{dispaly}</>;
};

export default Cards;
