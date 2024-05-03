import React from "react";

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check x">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
};

export default FilterBTN;
