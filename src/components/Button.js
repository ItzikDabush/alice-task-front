import React from "react";
import "./Button.css";

const Button = ({ currentCity, getWeather }) => (
  <button className={`btn-try-again ${currentCity}-btn`} onClick={getWeather}>
    נסה שוב
  </button>
);
export default Button;
