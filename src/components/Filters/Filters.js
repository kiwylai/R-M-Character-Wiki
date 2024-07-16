import React from "react";
import Genders from "./Category/Genders";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center" fs-4 mb-4>
        Filter
      </div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center 
      text-primary
      text-decoration-underline mb-4"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}></Status>

        <Species
          setPageNumber={setPageNumber}
          setSpecies={setSpecies}
        ></Species>

        <Genders setGender={setGender} setPageNumber={setPageNumber}></Genders>
      </div>
    </div>
  );
};

export default Filters;
