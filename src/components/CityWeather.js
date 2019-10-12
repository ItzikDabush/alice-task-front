import React, { Component } from "react";
import WeatherDatailes from "./WeatherDatailes";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import "./CityWeather.css";

class CityWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      data: {},
      isLoaded: false
    };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    this.setState({ isLoaded: false, error: null });
    console.log("inside getWeather");
    const url = `https://secure-castle-42883.herokuapp.com/${this.props.currentCity}`;
    const data = fetch(url)
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            data: res,
            isLoaded: true
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error);
        }
      );

    return data;
  }

  render() {
    const { isLoaded, error, data } = this.state;
    const {currentCity} = this.props;

    return (
      <section className="CityWeather">
        <h2 className="CityWeather-title">מזג אוויר עכשיו</h2>
        {error ? (
          <Button
            currentCity={currentCity}
            getWeather={this.getWeather}
          />
        ) : isLoaded ? (
          <WeatherDatailes data={data} />
        ) : (
          <LoadingSpinner />
        )}
      </section>
    );
  }
}

export default CityWeather;
