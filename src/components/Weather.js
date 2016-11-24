import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import { fetchWeather } from '../actions/index';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }

  handleSearch(location) {
    let that = this;

    this.setState({ isLoading: true });

    fetchWeather(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({ isLoading: false });
      alert(errorMessage);
    });
  }

  render() {
    let { isLoading, location, temp } = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    };

    return (
      <div>
        <h2 className="text-center">Get weather</h2>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    );
  }
}
