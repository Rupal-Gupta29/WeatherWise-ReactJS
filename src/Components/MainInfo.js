import React from "react";
import "./mainInfo.css";

const MainInfo = ({ cityName, desc, temp, iconId, weatherUnit, country }) => {

  return (
    <div className="main-info-container row p-3 rounded-2">
      <div className="col-sm-8 d-flex align-items-center">
        <div className="details-container">
          <h2>{cityName}, {country}</h2>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
              alt="weather-img"
              width={150}
              className="img-fluid"
            />
          </div>
          <div className="text-capitalize">{desc}</div>
        </div>
      </div>
      <div className="col-sm-4">
        <h1>{temp} &deg;{weatherUnit==='metric'?"C":"F"}</h1>
      </div>
    </div>
  );
};

export default MainInfo;
