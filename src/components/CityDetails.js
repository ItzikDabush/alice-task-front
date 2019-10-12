import React from "react";
import "./CityDetails.css";

function CityDetails({ detailOne, detailTwo }) {
  return (
    <section className="CityDetails">
      <h2 className="CityDetails-title">קצת על העיר</h2>
      <p className="CityDetails-data">{detailOne}</p>
      <br />
      <p className="CityDetails-data">{detailTwo}</p>
    </section>
  );
}

export default CityDetails;
