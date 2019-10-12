import React from "react";
import CityDetails from "./CityDetails";
import CityWeather from "./CityWeather";
import "./CitySideBar.css";

function CitySideBar({ details, currentCity}) {
   return (
    <div className="CitySideBar">
      <CityDetails {...details} />
      <CityWeather currentCity={currentCity} />
    </div>
  );
}

export default CitySideBar;
