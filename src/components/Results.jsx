import React, { Component } from 'react';

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="display-results">
        {/* <label>Results</label> */}
        {this.props.results &&
          this.props.results.Carriers.map((result) => {
            return (
              <div key={result.id} className="results-box">
                <p>Carrier Id: {result.CarrierId}</p>
                <p>Carrier: {result.Name}</p>
              </div>
            );
          })}

        {this.props.results &&
          this.props.results.Currencies.map((result) => {
            return (
              <div key={result.id} className="results-box">
                <p>
                  Currency: {result.Symbol}
                  {result.Code}
                </p>
              </div>
            );
          })}

        {this.props.results !== null && (
          <div>
            <p>Outbound: {this.props.results.Places[0].Name}</p>
            <p>
              Inbound: {this.props.results.Places.length === 2 &&
                this.props.results.Places[1].Name}
            </p>
          </div>
        )}

        {this.props.results &&
          this.props.results.Quotes.map((result) => {
            return (
              <div key={result.id} className="results-box">
                <p>
                  Outbound Departure Date: {result.OutboundLeg.DepartureDate}
                </p>
                {/* I need a defensive check to make sure there is an inbound flight available */}
                <p>Inbound Departure Date: {result.InboundLeg.DepartureDate}</p>
                <p>
                  Direct Flight: {result.Direct === false ? 'Nop' : 'direct'}
                </p>
                <p>Lowest Price: {result.MinPrice}</p>
                <p>Quote Date and Time: {result.QuoteDateTime}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Results;
