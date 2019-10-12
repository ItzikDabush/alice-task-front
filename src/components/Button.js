import React from "react";
import "./Button.css";

function Button({ currentCity, getWeather }) {
  return (
    <button className={`btn-try-again ${currentCity}-btn`} onClick={getWeather}>
      נסה שוב
    </button>
  );
}

export default Button;
