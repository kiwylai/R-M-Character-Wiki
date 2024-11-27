// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 请求 Rick and Morty API，获取角色列表数据
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center">Rick & Morty Characters</h1>

      {/* 搜索框 */}
      <input
        type="text"
        placeholder="Search for Characters"
        value={searchTerm}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />

      {/* 角色列表 */}
      <div className="row">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="col-4 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={character.image}
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.status}</p>
                {/* 点击角色跳转到详情页面 */}
                <Link to={`/${character.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
