import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, episode, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => {
            return res.json();
          });
        })
      );

      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unkown" : name}</span>
        </h1>

        <h5 className="text-center mb-4">
          Air Date : {air_date === "" ? "Unkown" : air_date}
        </h5>
      </div>
      <div className="row mb-4">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup total={51} name="Episode" setID={setID} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
