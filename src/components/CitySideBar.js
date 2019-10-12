import React from "react";
import CityDetails from "./CityDetails";
import CityWeather from "./CityWeather";
import "./CitySideBar.css";

const CitySideBar = ({ details, currentCity }) => (
  <div className="CitySideBar">
    <CityDetails {...details} />
    <CityWeather currentCity={currentCity} />
  </div>
);

export default CitySideBar;
