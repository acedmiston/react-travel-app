import React, { Component } from 'react';
import axios from 'axios';
import FlightInput from '../components/FlightInput';
// import Date from '../components/Date';
import CovidInfo from '../components/CovidInfo';
import ImageCarousel from '../components/ImageCarousel';

class Home extends Component {
  state = {
    originCountry: { Places: [] },
    destinationCountry: { Places: [] },
    flightDirection: 'return',
    outBoundDate: '',
    inBoundDate: '',
    numberNomaders: '',
  };
  render() {
    return (
      <>
        <p className="home-tagline">Where will you go next?</p>
        <form>
          <div className="outer-box">
            <div className="radio-container">
              <div className="radio">
                <label className="radio-label">
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
                <label className="radio-label">
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
                <label>Origin</label>
                {/* we currently use the text field to store user input and the selected airport after user has chosen from dropdown 
                we should be storing user input value in state and clearing it when value is selected from the dropdown
                */}
                <FlightInput
                  type={'originCountry'}
                  showDropDown={
                    this.state.originCountry.Places.length > 0 && true
                  }
                  countrySelection={
                    this.state.originCountrySelection
                      ? this.state.originCountrySelection.PlaceName
                      : ''
                  }
                  Places={this.state.originCountry.Places}
                  onInput={this.onInput}
                  onAirportSelect={this.onAirportSelect}
                />
              </div>
              <div>
                <label>Destination</label>
                <FlightInput
                  type={'destinationCountry'}
                  showDropDown={
                    this.state.destinationCountry.Places.length > 0 && true
                  }
                  countrySelection={
                    this.state.destinationCountrySelection
                      ? this.state.destinationCountrySelection.PlaceName
                      : ''
                  }
                  Places={this.state.destinationCountry.Places}
                  onInput={this.onInput}
                  onAirportSelect={this.onAirportSelect}
                />
              </div>
              <div>
                <label>Depart</label>
                <div>
                  <input
                    type="date"
                    name="outBoundDate"
                    onChange={this.onChange}
                  ></input>
                </div>
              </div>
              <div>
                <label>Return</label>
                <div>
                  <input
                    type="date"
                    name="inBoundDate"
                    onChange={this.onChange}
                  ></input>
                </div>
              </div>
              <div>
                <label># Nomaders</label>
                <div>
                  <input
                    className="number-input"
                    name="numberNomaders"
                    type="number"
                    onChange={this.onChange}
                  ></input>
                </div>
              </div>
              <button className="results-button" onClick={this.onSubmit}>
                Let's go! <i className="fas fa-plane"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="carousels-container">
          <p className="flight-deals-title">Flight Deals For You</p>
          <ImageCarousel />
          <p className="hottest-destinations-title">
            Today's Hottest Destinations
          </p>
          <ImageCarousel />
        </div>
        <CovidInfo />
      </>
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/GB/GBP/en-GB/${this.state.originCountrySelection.PlaceId}/${this.state.destinationCountrySelection.PlaceId}/${this.state.outBoundDate}/${this.state.inBoundDate}`;
    const options = {
      method: 'GET',
      url,
      headers: {
        'x-rapidapi-key': '3737c740damsh294914373cea252p10fc24jsnd39fd87ca55c',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  onAirportSelect = (place, type) => {
    // setting object with dynamic key based on a variable
    this.setState({ [type + 'Selection']: place, [type]: { Places: [] } });
    console.log(place, type);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  };

  onInput = (e) => {
    const options = {
      method: 'GET',
      url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
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
    console.log(this.state);
  }
}

export default Home;
