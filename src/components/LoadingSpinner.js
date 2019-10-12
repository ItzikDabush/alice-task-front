import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import './LoadingSpinner.css'


function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <p className="LoadingSpinner-data">טוען נתוני מזג אוויר</p>
      <PropagateLoader size={10} sizeUnit={"px"} color={"#fcfbfd"} />
    </div>
  );
}

export default LoadingSpinner;