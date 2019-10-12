import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import CityPage from "./components/CityPage";
import cities from "./components/seedCities";
import "./App.css";

class App extends Component {
  //defining a default city to be presented at first load of the app
  static defaultProps = {
    defaultCity: "amsterdam"
  };

  constructor(props) {
    super(props);
    this.state = {
      currentCity: this.props.defaultCity
    };

    this.setCity = this.setCity.bind(this);
  }

// setting the currentCity in the state to be the city selected by the user at the Navbar
  setCity(city) {
    this.setState({ currentCity: city });
  }

  render() {
    //check if the currentCity in the state has changed by setCity()
    const { currentCity } = this.state;
    const { defaultCity } = this.props;
    const cityChosen = currentCity || defaultCity;

    //getting the chosen city data from the seedCities file imported above
    const city = cities.find(city => city.enName === cityChosen);

    console.log("render App");
    return (
      <div className="App">
        <Navbar
          setCity={this.setCity}
          cities={cities}
          cityChosen={cityChosen}
        />
        <Route
          render={({ location }) => (
            <TransitionGroup component={null}>
              <CSSTransition timeout={1500} classNames="fade" key={location.key}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/:city"
                    render={routeProps => (
                      <CityPage {...city} {...routeProps} />
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to={currentCity} />} 
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
