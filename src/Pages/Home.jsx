import React, { Component } from 'react';
import axios from 'axios';
import FlightInput from '../components/FlightInput';
import CovidInfo from '../components/CovidInfo';
import ImageCarousel from '../components/ImageCarousel';
import Results from '../components/Results';
import { Link } from 'react-router-dom';
import love from '../images/Love.jpg';

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
      // inBoundDate,
      numberNomaders,
      originAirportInputValue,
      destinationAirportInputValue,
    } = this.state;
    const isEnabled =
      outBoundDate.length > 0 &&
      // inBoundDate && inBoundDate.length > 0 &&
      numberNomaders.length > 0 &&
      originAirportInputValue.length > 0 &&
      destinationAirportInputValue.length > 0;
    return (
      <>
        <div className="background-box">
          <img src={love} alt="background" className="background" />
        </div>
        <div className="tagline-holder">
          <p className="home-tagline">Where will you go next?</p>
        </div>
        <form>
          <div className="outer-box">
            <div className="radio-container">
              <div className="radio">
                <label htmlFor="radio" className="radio-label">
                  <input
                    type="radio"
                    name="flightDirection"
                    value="return"
                    checked={this.state.flightDirection === 'return'}
                    className="form-check-input"
                    onChange={this.onChange}
                  />
                  <div className="form-check-circle"></div>
                  <span>Return</span>
                </label>
              </div>
              <div className="radio">
                <label htmlFor="radio" className="radio-label">
                  <input
                    type="radio"
                    name="flightDirection"
                    value="one-way"
                    checked={this.state.flightDirection === 'one-way'}
                    className="form-check-input"
                    onChange={this.onChange}
                  />
                  <div className="form-check-circle"></div>
                  <span>One way</span>
                </label>
              </div>
            </div>
            <div className="input-fields">
              <div>
                <label htmlFor="originAirport">Origin</label>
                <FlightInput
                  type={'originAirport'}
                  showDropDown={
                    this.state.originAirport.Places.length > 0 && true
                  }
                  value={this.state.originAirportInputValue}
                  Places={this.state.originAirport.Places}
                  onInput={this.onInput}
                  onAirportSelect={this.onAirportSelect}
                  onClear={this.onClear}
                />
              </div>
              <div>
                <label htmlFor="destinationAirport">Destination</label>
                <FlightInput
                  type={'destinationAirport'}
                  showDropDown={
                    this.state.destinationAirport.Places.length > 0 && true
                  }
                  Places={this.state.destinationAirport.Places}
                  onInput={this.onInput}
                  value={this.state.destinationAirportInputValue}
                  onAirportSelect={this.onAirportSelect}
                  onClear={this.onClear}
                />
              </div>
              <div>
                <label htmlFor="depart">Depart</label>
                <div>
                  <input
                    id="depart"
                    type="date"
                    name="outBoundDate"
                    onChange={this.onChange}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="return">Return</label>
                <div>
                  <input
                    id="return"
                    type="date"
                    name="inBoundDate"
                    onChange={this.onChange}
                    disabled={this.state.flightDirection === 'one-way'}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="numbers"># Nomaders</label>
                <div>
                  <input
                    id="numbers"
                    className="number-input"
                    name="numberNomaders"
                    type="number"
                    min="0"
                    onChange={this.onChange}
                  ></input>
                </div>
              </div>
              <button
                className="results-button"
                onClick={this.onSubmit}
                disabled={!isEnabled}
              >
                Let's go! <i className="fas fa-plane"></i>
              </button>
            </div>
          </div>
        </form>
        <Results results={this.state.results} />
        <div className="carousels-container">
          <p className="flight-deals-title">Recent Flight Deals For You</p>
          <Link to="/flight-deals">
            <ImageCarousel />
          </Link>
          <p className="hottest-destinations-title">
            Today's Hottest Destinations
          </p>
          <Link to="/hottest-destinations">
            <ImageCarousel />
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

  onClear = (type) => {
    this.setState({ [type + 'InputValue']: '' });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/GB/${this.props.currency}/en-GB/${this.state.originAirportSelection.PlaceId}/${this.state.destinationAirportSelection.PlaceId}/${this.state.outBoundDate}/${this.state.inBoundDate}`;
    const options = {
      method: 'GET',
      url,
      headers: {
        'x-rapidapi-key': '3737c740damsh294914373cea252p10fc24jsnd39fd87ca55c',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    };
    const self = this;
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        self.setState({ results: response.data });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  onAirportSelect = (place, type) => {
    // setting object with dynamic key based on a variable
    this.setState({
      [type + 'Selection']: place,
      [type]: { Places: [] },
      [type + 'InputValue']: place.PlaceName,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  onInput = (e) => {
    this.setState({ [e.target.id + 'InputValue']: e.target.value });
    const options = {
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/GB/${this.props.currency}/en-GB/`,
      params: { query: e.target.value },
      headers: {
        'x-rapidapi-key': '3737c740damsh294914373cea252p10fc24jsnd39fd87ca55c',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    };
    this.getAPIData(e.target.id, options);
  };

  async getAPIData(id, options) {
    const result = await axios.request(options);
    this.setState({ [id]: result.data });
  }
}

export default Home;
