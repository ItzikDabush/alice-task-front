import React from "react";
import { Redirect } from "react-router-dom";

import CityImage from "./CityImage";
import CitySideBar from "./CitySideBar";

import "./CityPage.css";

function CityPage(props) {

    const city = props.match.params.city;
    console.log(city)
    const { enName, src, details, heName} = props;
    return city === enName ? (
      <div className={`CityPage ${enName}`}>
        <CityImage src={src} name={heName} currentCity={enName} />
        <CitySideBar details={details} currentCity={enName} />
      </div>
    ) : (
      <Redirect to={`/${enName}`}></Redirect>
    );
  }


export default CityPage;
