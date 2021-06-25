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
    selectedOption: '',
    outBoundDate: '',
    inBoundDate: '',
    numberTravelers: '',
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
                    name="direction"
                    value="return"
                    checked={true}
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
                    name="direction"
                    value="one-way"
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
                <FlightInput
                  type={'originCountry'}
                  showDropDown={
                    this.state.originCountry.Places.length > 0 && true
                  }
                  countrySelection={this.state.originCountrySelection}
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
                  countrySelection={this.state.destinationCountrySelection}
                  Places={this.state.destinationCountry.Places}
                  onInput={this.onInput}
                  onAirportSelect={this.onAirportSelect}
                />
              </div>
              <div>
                <label>Depart</label>
                <div>
                  <input type="date" onChange={this.onChange}></input>
                </div>
              </div>
              <div>
                <label>Return</label>
                <div>
                  <input type="date" onChange={this.onChange}></input>
                </div>
              </div>
              <div>
                <label># Nomaders</label>
                <div>
                  <input
                    className="number-input"
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
    let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/
    apiservices/
    browsequotes/v1.0/
    %7Bcountry%7D/%7Bcurrency%7D/%7Blocale%7D/%7B ${this.state.originCountry} %7D/
    %7Bd${this.state.destinationCountry}%7D/
    %7B ${this.state.outBoundDate}%7D/
    %7B${this.state.inBoundDate}%7D`;
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

  onAirportSelect = (PlaceName, type) => {
    this.setState({ [type + 'Selection']: PlaceName, [type]: { Places: [] } });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
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
