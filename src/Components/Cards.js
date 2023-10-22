import React from "react";
import CardInfo from "./CardInfo";
import "./cards.css";
import {
  ArrowDown,
  ArrowUp,
  ArrowsCollapse,
  Droplet,
  EmojiSmile,
  Wind,
} from "react-bootstrap-icons";

const Cards = ({ min, max, feelsLike, pressure, humidity, windSpeed, weatherUnit }) => {
  return (
    <div className="card-container row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <CardInfo
          heading="Min"
          value={min}
          unit={<span>&deg;{weatherUnit==='metric'?"C":"F"}</span>}
          icon={<ArrowDown size={20} />}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <CardInfo
          heading="Max"
          value={max}
          unit={<span>&deg;{weatherUnit==='metric'?"C":"F"}</span>}
          icon={<ArrowUp size={20} />}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <CardInfo
          heading="Feels Like"
          value={feelsLike}
          unit={<span>&deg;{weatherUnit==='metric'?"C":"F"}</span>}
          icon={<EmojiSmile size={20} />}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <CardInfo
          heading="Pressure"
          value={pressure}
          unit={<span>hPa</span>}
          icon={<ArrowsCollapse size={20} />}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <CardInfo
          heading="Humidity"
          value={humidity}
          unit={<span>%</span>}
          icon={<Droplet size={20} />}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <CardInfo
          heading="Wind Speed"
          value={windSpeed}
          unit={<span>{weatherUnit==='metric'?"m/s":"m/h"}</span>}
          icon={<Wind size={20} />}
        />
      </div>
    </div>
  );
};

export default Cards;
