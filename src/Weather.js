import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"ed75de9c084d1778f7fc5c7483728b90"}`
      );
      setWeather(response);
    } catch (error) {
      console.log("Not Found");
    }
  };
  const handleWeatherChange = () => {
    fetchWeather();
  };
  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleWeatherChange}>Add City Name</button>
      {weather && (
        <>
          <div className="weather-info">
            <h2>{weather.data.name}</h2>
            <p>The Tempertaure is : {weather.data.main.temp}</p>
            <p>
              The Condition of {city} is :{weather.data.weather[0].description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
