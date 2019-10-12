import React from "react";
import "./CityImage.css";

function CityImage({ src, name, currentCity }) {
  return (
    <div className="CityImage">
      <h1 className="CityImage-title">{name}</h1>
      <img className={`${currentCity}-img`} src={src} alt={`${currentCity}`}/>
    </div>
  );
}

export default CityImage;
