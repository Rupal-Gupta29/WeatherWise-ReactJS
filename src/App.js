import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import MainInfo from "./Components/MainInfo";
import Cards from "./Components/Cards";
import spinner from "./Assets/loading.gif";
import "./App.css";
import Swal from 'sweetalert2';

const App = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [cityDetails, setCityDetails] = useState(null);
  const [weatherUnit, setWeatherUnit] = useState("metric");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        fetch(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((response) => {
            if (!response.ok) {
              throw Error;
            }
            return response.json();
          })
          .then((data) => {
            setCity(data[0].name);
            setFirstRender(false);
            setLoading(false);
          })
          .catch((err) => {
            console.log("Error occured:", err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Wrong Input!',
              footer: 'Try again...'
            })
          });
      });
    } else {
      console.log("Browser is not supporting Geolocation.");
    }
  }, []);

  useEffect(() => {
    if (!firstRender) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${weatherUnit}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw Error;
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCityDetails(data);
          setLoading(false);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Error occured", err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Input!',
            footer: 'Try again...'
          })
        });
    }
  }, [city, firstRender, weatherUnit]);

  const getCity = (cityName) => {
    setCity(cityName);
  };

  const getWeatherUnit = (unit) => {
    setWeatherUnit(unit);
  };

  return (
    <div className="app-container p-3">
      {loading && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <img
            src={spinner}
            alt="loading..."
            width={150}
            className="img-fluid d-block"
          />
        </div>
      )}
      {cityDetails && (
        <>
          <SearchBar
            getCity={getCity}
            weatherUnit={weatherUnit}
            getWeatherUnit={getWeatherUnit}
          />
          <MainInfo
            cityName={cityDetails.name}
            desc={cityDetails.weather[0].description}
            temp={cityDetails.main.temp}
            iconId={cityDetails.weather[0].icon}
            weatherUnit={weatherUnit}
            country={cityDetails.sys.country}
          />
          <Cards
            min={cityDetails.main.temp_min}
            max={cityDetails.main.temp_max}
            feelsLike={cityDetails.main.feels_like}
            pressure={cityDetails.main.pressure}
            humidity={cityDetails.main.humidity}
            windSpeed={cityDetails.wind.speed}
            weatherUnit={weatherUnit}
          />
        </>
      )}
    </div>
  );
};

export default App;
