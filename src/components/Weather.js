import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
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

    this.setState({
      isLoading: true,
      errorMessage: null
    });

    fetchWeather(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }

  render() {
    let { isLoading, location, temp, errorMessage } = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    };

    const renderError = () => {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage} />;
      }
    };

    return (
      <div>
        <h1 className="text-center page-title">Get weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
