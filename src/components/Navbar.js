import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar({cities, cityChosen, setCity}) {
  const handleClick = evt => {
    const selected = evt.target.name;
    setCity(selected);
  };

  const CitiesLinks = cities.map(city => (
    <NavLink
      onClick={handleClick}
      exact
      key={city.enName}
      name={city.enName}
      to={`/${city.enName}`}
    >
      {city.heName}
    </NavLink>
  ));

  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <nav>
        <div className="left-link">
          <NavLink to="/">כל הערים</NavLink>
        </div>
        <div className="right-links">
          <div className="cities">{CitiesLinks}</div>
          <div className={`underline ${cityChosen}-current`}/>
        </div>
      </nav>
    </header>
  );
}
// }

export default withRouter(Navbar);
