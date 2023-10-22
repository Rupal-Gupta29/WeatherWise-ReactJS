import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ getCity, weatherUnit, getWeatherUnit }) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCity(cityName);
  };

  return (
    <div className="search-container row p-4 rounded-2">
      <div className="col-sm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Search..."
            className="search-inp form-control"
          />
        </form>
      </div>
      {weatherUnit === "metric" ? (
        <div className="btn-container col-sm">
          <button className="btn btn-light px-5 fw-bold" onClick={()=>getWeatherUnit('imperial')}>&deg; F</button>
        </div>
      ) : (
        <div className="btn-container col-sm">
          <button className="btn btn-light px-5 fw-bold" onClick={()=>getWeatherUnit('metric')}>&deg; C</button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
