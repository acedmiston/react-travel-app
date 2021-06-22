import React, { Component } from 'react';
import axios from 'axios';
import FlightInput from '../components/FlightInput';
import Date from '../components/Date';
import CovidInfo from '../components/CovidInfo';
import ImageSlider from '../components/ImageSlider';

class Home extends Component {
  state = {
    originCountry: { Places: [] },
    destinationCountry: { Places: [] },
  };
  render() {
    return (
      <>
        <p className="home-tagline">Where will you go next?</p>
        <form>
          <div className="outer-box">
            <div className="radio-container">
              <div className="radio">
                <label>Return</label>
                <input type="radio" name="direction" />
              </div>
              <div className="radio">
                <label>One way</label>
                <input type="radio" name="direction" />
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
                  <Date />
                </div>
              </div>
              <div>
                <label>Return</label>
                <div>
                  <Date />
                </div>
              </div>
              <div>
                <label># Nomaders</label>
                <div>
                  <input type="number"></input>
                </div>
              </div>
              <button className="results-button" onClick={this.onSubmit}>
                Let's go! <i className="fas fa-plane"></i>
              </button>
            </div>
          </div>
        </form>
        <p className="flight-deals-title">Flight Deals For You</p>
        <ImageSlider />
        <p className="hottest-destinations-title">
          Today's Hottest Destinations
        </p>
        <ImageSlider />
        <CovidInfo />
      </>
    );
  }

  onSubmit = () => {
    let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/
    apiservices/
    browsequotes/v1.0/
    %7Bcountry%7D/%7Bcurrency%7D/%7Blocale%7D/%7B ${this.state.originCountry} %7D/%7Bdestinationplace%7D/%7Boutboundpartialdate%7D/%7Binboundpartialdate%7D`;
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
