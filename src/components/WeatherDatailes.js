import React from "react";
import './WeatherDatailes.css';
import "../fonts/owfont-master/css/owfont-regular.min.css";

const WeatherDatailes = ({data}) => {
  const { icon, temperature, precipitation, humadity, wind } = data;
  return (
    <React.Fragment>
      <div className="top">
        <i className={`owf owf-5x owf-${icon.id}`}></i>
        <p dir="ltr" className="temperature">
          {temperature}
          <span>&#730;</span>
        </p>
      </div>
      <div className="bottom">
        <p>Precipitation: {precipitation['1h']}mm</p>
        <p>Humadity: {humadity}%</p>
        <p>Wind: {wind}km</p>
      </div>
    </React.Fragment>
  );
}

export default WeatherDatailes;
