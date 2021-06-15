import React, { Component } from 'react';
import axios from 'axios';
import FlightInput from './components/FlightInput';
import Date from './components/Date';
import Nav from './components/Nav';

class App extends Component {
  state = {
    originCountry: { Places: [] },
    destinationCountry: { Places: [] }
  }
  render() {
    // console.log(this.state.originCountry);
    return (
      <div>
        <Nav />
        <div className="outer-box">
          <div className="input-fields">
            <div>
              <label>Origin</label>
              <FlightInput type={'originCountry'} showDropDown={this.state.originCountry.Places.length > 0 && true} countrySelection={this.state.originCountrySelection} Places={this.state.originCountry.Places} onInput={this.onInput} onAirportSelect={this.onAirportSelect} />
            </div>
            <div>
              <label>Destination</label>
              <FlightInput type={'destinationCountry'} showDropDown={this.state.destinationCountry.Places.length > 0 && true} countrySelection={this.state.destinationCountrySelection} Places={this.state.destinationCountry.Places} onInput={this.onInput} onAirportSelect={this.onAirportSelect} />
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
              <div><input type='number'></input></div>
            </div>
            <button className="results-button">Let's go!</button>
          </div>
        </div>
      </div>
    );
  }

  onAirportSelect = (PlaceName, type) => {
    this.setState({ [type + 'Selection']: PlaceName, [type]: { Places: [] } });
  }

  submitResults = (e) => {

  }

  onInput = (e) => {
    const options = {
      method: 'GET',
      url:
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
      params: { query: e.target.value },
      headers: {
        'x-rapidapi-key': '3737c740damsh294914373cea252p10fc24jsnd39fd87ca55c',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    };
    this.getAPIData(e.target.id, options);
  }

  async getAPIData(id, options) {
    const result = await axios.request(options);
    this.setState({ [id]: result.data });
    console.log(this.state);
  }
}


export default App;