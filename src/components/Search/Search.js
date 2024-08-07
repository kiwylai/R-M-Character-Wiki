import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form
      className="d-flex 
    flex-sm-row
    flex-column
    align-items-center
    justify-content-center gap-4 mb-5"
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          setPageNumber(1);
        }}
        className={styles.input}
        placeholder="Search for Characters"
      ></input>
      <button
        onClick={(e) => e.preventDefault()}
        type="button"
        class={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
