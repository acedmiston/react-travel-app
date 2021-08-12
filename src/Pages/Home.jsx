import React, { Component } from 'react';
import axios from 'axios';
import CovidInfo from '../components/CovidInfo';
import ImageCarousel from '../components/ImageCarousel';
import Results from '../components/Results';
import { Link } from 'react-router-dom';
import love from '../images/Love.jpg';
import SearchForm from '../components/SearchForm';

class Home extends Component {
  state = {
    originAirport: { Places: [] },
    destinationAirport: { Places: [] },
    flightDirection: 'return',
    outBoundDate: '',
    inBoundDate: '',
    numberNomaders: '',
    originAirportInputValue: '',
    destinationAirportInputValue: '',
    results: null,
  };

  render() {
    const {
      outBoundDate,
      numberNomaders,
      originAirportInputValue,
      destinationAirportInputValue,
    } = this.state;
    const isEnabled =
      outBoundDate.length > 0 &&
      numberNomaders.length > 0 &&
      originAirportInputValue.length > 0 &&
      destinationAirportInputValue.length > 0;
    return (
      <>
        <div className="background-box">
          <img
            src={love}
            alt="background"
            className="background"
            rel="preload"
          />
        </div>
        <div className="tagline-holder">
          <p className="home-tagline">Where will you go next?</p>
        </div>
        <SearchForm
          flightDirection={this.state.flightDirection}
          onChange={this.onChange}
          onInput={this.onInput}
          onAirportSelect={this.onAirportSelect}
          onClear={this.onClear}
          state={this.state}
          onSubmit={this.onSubmit}
          isEnabled={isEnabled}
        />
        <Results
          results={this.state.results}
          flightDirection={this.state.flightDirection}
          state={this.state}
        />
        <div className="carousels-container">
          <p className="flight-deals-title">Recent Flight Deals For You</p>
          <Link to="/flight-deals">
            <ImageCarousel
              currency={this.state.currency}
              currencies={this.state.currencies}
            />
          </Link>
          <p className="hottest-destinations-title">
            Today's Hottest Destinations
          </p>
          <Link to="/hottest-destinations">
            <ImageCarousel
              currency={this.state.currency}
              currencies={this.state.currencies}
            />
          </Link>
        </div>
        <CovidInfo />
      </>
    );
  }

  //not currently in use
  randomTime = () => {
    const randomHour = Math.floor(Math.random() * 13) + 1;
    const randomMin = Math.floor(Math.random() * 60);
    return randomHour + ':' + randomMin;
  };

  //allows you to clear the state if your airport was incorrect
  onClear = (type) => {
    this.setState({ [type + 'InputValue']: '' });
  };

  //shows all results from the flight search
  onSubmit = async (e) => {
    e.preventDefault();
    const results = await axios.post(
      'https://nomader-backend.herokuapp.com/submit',
      {
        payload: `GB/${this.props.currency}/en-GB/${this.state.originAirportSelection.PlaceId}/${this.state.destinationAirportSelection.PlaceId}/${this.state.outBoundDate}/${this.state.inBoundDate}`,
      }
    );
    this.setState({ results: results.data });
  };

  //sets the state with some dynamic inputs based on a variable
  onAirportSelect = (place, type) => {
    this.setState({
      [type + 'Selection']: place,
      [type]: { Places: [] },
      [type + 'InputValue']: place.PlaceName,
    });
  };

  //sets the state with some dynamic inputs
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  // shows a dropdown of all airports when typing
  onInput = async (e) => {
    this.setState({ [e.target.id + 'InputValue']: e.target.value });

    const results = await axios.post(
      'https://nomader-backend.herokuapp.com/flight-input',
      {
        payload: `GB/${this.props.currency}/en-GB/`,
        params: { query: e.target.value },
      }
    );
    console.log(results);
    this.setState({ [e.target.id]: results.data });
  };
}

export default Home;
