import React from "react";
import "./CityImage.css";

const CityImage = ({ src, name, currentCity }) => (
  <div className="CityImage">
    <h1 className="CityImage-title">{name}</h1>
    <img className={`${currentCity}-img`} src={src} alt={`${currentCity}`} />
  </div>
);

export default CityImage;
