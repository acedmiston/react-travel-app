import React, { Component } from 'react';
import axios from 'axios';
import FlightInput from '../components/FlightInput';
import CovidInfo from '../components/CovidInfo';
import ImageCarousel from '../components/ImageCarousel';
// import dateFormat from 'dateformat';
// import Results from '../components/Results';
import { Link } from 'react-router-dom';

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

  // componentDidUpdate() {
  //   console.log(this.state.results);
  // }

  render() {
    return (
      <>
        <div className="tagline-holder">
          <p className="home-tagline">Where will you go next?</p>
        </div>
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
                <label>Destination</label>
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
                    disabled={this.state.flightDirection === 'one-way'}
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
        {/* <Results onClick={this.onSubmit}/> */}
        <div className="display-results">
          {/* <label>Results</label> */}
          {/* {this.state.results &&
            this.state.results.Carriers.map((result) => {
              return (
                <div key={result.id} className="results-box">
                  <p>Carrier Id: {result.CarrierId}</p>
                  <p>Carrier: {result.Name}</p>
                </div>
              );
            })}

          {this.state.results &&
            this.state.results.Currencies.map((result) => {
              return (
                <div key={result.id} className="results-box">
                  <p>
                    Currency: {result.Symbol}
                    {result.Code}
                  </p>
                </div>
              );
            })}

          {this.state.results !== null && (
            <div>
              <p>Outbound: {this.state.results.Places[0].Name}</p>
              <p>
                Inbound:
                {this.state.results.Places.length === 2 &&
                  this.state.results.Places[1].Name}
              </p>
            </div>
          )} */}

          {this.state.results &&
            this.state.results.Quotes.map((quote) => {
              // quote.InboundLeg.CarrierIds // [870, 139]  // British Airways

              const inboundCarrierNames = quote.InboundLeg.CarrierIds.map(
                (inboundCarrierId) => {
                  const inboundCarrierFound = this.state.results.Carriers.find(
                    (inboundCarrier) =>
                      inboundCarrier.inboundCarrierId === inboundCarrierId
                  );
                  const inboundCarrierName = inboundCarrierFound
                    ? inboundCarrierFound.Name
                    : '';
                  return inboundCarrierName;
                }
              );

              const outboundCarrierNames = quote.OutboundLeg.CarrierIds.map(
                (outboundCarrierId) => {
                  const outboundCarrierFound = this.state.results.Carriers.find(
                    (outboundCarrier) =>
                      outboundCarrier.outboundCarrierId === outboundCarrierId
                  );
                  const outboundCarrierName = outboundCarrierFound
                    ? outboundCarrierFound.Name
                    : '';
                  return outboundCarrierName;
                }
              );
              // Carriers = [{CarrierId: 139, name: "British Airways"}, {CarrierId: 870, name: "American Airways"}]
              // we are in one quote as we are mapping through them
              // quote =
              // {
              //   [
              //   {
              //     "QuoteId": 1,
              //     "MinPrice": 331,
              //     "Direct": false,
              //     "OutboundLeg": {
              //         "CarrierIds": [
              //             870
              //         ],
              //         "OriginId": 60987,
              //         "DestinationId": 65368,
              //         "DepartureDate": "2021-08-02T00:00:00"
              //     },
              //     "InboundLeg": {
              //         "CarrierIds": [
              //             870
              //         ],
              //         "OriginId": 65368,
              //         "DestinationId": 60987,
              //         "DepartureDate": "2021-08-08T00:00:00"
              //     },
              //     "QuoteDateTime": "2021-07-10T16:34:00"
              // }
              // ]
              // }

              return (
                <div key={quote.id} className="results-box">
                  <p>
                    Outbound Departure Date: {quote.OutboundLeg.DepartureDate}
                  </p>
                  {/* I need a defensive check to make sure there is an inbound flight available */}
                  <p>
                    Inbound Departure Date: {quote.InboundLeg.DepartureDate}
                  </p>
                  <p>
                    Direct Flight: {quote.Direct === false ? 'Nope!' : 'Yup!'}
                  </p>
                  <p>Lowest Price: {quote.MinPrice}</p>
                  {/* <p>Quote Date and Time: {quote.QuoteDateTime}</p> */}
                  <p>{inboundCarrierNames.join(', ')}</p>
                  <p>{outboundCarrierNames.join(', ')}</p>
                </div>
              );
            })}
        </div>

        <div className="carousels-container">
          <p className="flight-deals-title">Flight Deals For You</p>
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
    // console.log(type);
    this.setState({
      [type + 'Selection']: place,
      [type]: { Places: [] },
      [type + 'InputValue']: place.PlaceName,
    });
    // console.log(place, type);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      // console.log(this.state);
    });
  };

  onInput = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({ [e.target.id + 'InputValue']: e.target.value });
    const options = {
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/${this.props.currency}/en-GB/`,
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
    // console.log(this.state);
  }
}

export default Home;
