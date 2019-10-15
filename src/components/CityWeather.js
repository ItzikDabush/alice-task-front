import React, { Component } from "react";
import WeatherDatailes from "./WeatherDatailes";
import LoadingSpinner from "./LoadingSpinner";
import "./CityWeather.css";
import ErrorMessage from "./ErrorMessage";

class CityWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataLoadedFromServer: false,
      error: false
    };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    this.setState({ error: false, dataLoadedFromServer: false });
    const url = `https://alice-task-server.herokuapp.com/${this.props.currentCity}`;
    
    const data = fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
          dataLoadedFromServer: true,
          error: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: true,
          dataLoadedFromServer: false
        });
      });
    return data;
  }

  render() {
    const { dataLoadedFromServer, error, data } = this.state;
    const { currentCity } = this.props;

    return (
      <section className="CityWeather">
        <h2 className="CityWeather-title">מזג אוויר עכשיו</h2>
        {error ? (
          <ErrorMessage
            currentCity={currentCity}
            getWeather={this.getWeather}
          />
        ) : dataLoadedFromServer ? (
          <WeatherDatailes data={data} />
        ) : (
          <LoadingSpinner />
        )}
      </section>
    );
  }
}

export default CityWeather;
