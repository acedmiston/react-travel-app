import React, { Component } from 'react';

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="display-results">
        {this.state.results &&
          this.state.results.Quotes.map((quote) => {
            let inboundDateFormat, inboundTimeFormat;
            let inboundCarrierNames = [];
            let isReturn = false;

            if (this.state.flightDirection === 'return') {
              isReturn = true;

              inboundDateFormat = new Date(
                quote.InboundLeg.DepartureDate
              ).toDateString();

              inboundTimeFormat = new Date(
                quote.InboundLeg.DepartureDate
              ).toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit',
              });

              inboundCarrierNames = quote.InboundLeg.CarrierIds.map(
                (quoteCarrierId) => {
                  const inboundCarrierFound = this.state.results.Carriers.find(
                    (inboundCarrier) =>
                      inboundCarrier.CarrierId === quoteCarrierId
                  );
                  const inboundCarrierName = inboundCarrierFound
                    ? inboundCarrierFound.Name
                    : '';
                  return inboundCarrierName;
                }
              );
            }

            const outboundDateFormat = new Date(
              quote.OutboundLeg.DepartureDate
            ).toDateString();

            const outboundTimeFormat = new Date(
              quote.OutboundLeg.DepartureDate
            ).toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
            });

            console.log(quote);

            const outboundCarrierNames = quote.OutboundLeg.CarrierIds.map(
              (quoteCarrierId) => {
                const outboundCarrierFound = this.state.results.Carriers.find(
                  (outboundCarrier) =>
                    outboundCarrier.CarrierId === quoteCarrierId
                );
                const outboundCarrierName = outboundCarrierFound
                  ? outboundCarrierFound.Name
                  : '';
                return outboundCarrierName;
              }
            );

            return (
              <div key={quote.id} className="results-box">
                <div className="outbound-trip">
                  <p>Depart:</p>
                  <div className="depart-date">{outboundDateFormat}</div>
                  <div className="depart-time">
                    {outboundTimeFormat}{' '}
                    {this.state.results.Places[0].CityName.toUpperCase()}
                  </div>
                  <div className="origin-city">
                    {this.state.results.Places[0].Name}{' '}
                    {'(' + this.state.results.Places[0].SkyscannerCode + ')'}
                  </div>
                  <br></br>
                  {isReturn && (
                    <>
                      <p>Return:</p>
                      <div className="land-date">{inboundDateFormat}</div>
                      <div className="land-time">
                        {inboundTimeFormat}{' '}
                        {this.state.results.Places[1].CityName.toUpperCase()}
                      </div>
                      <div className="origin-city">
                        {this.state.results.Places[1].Name}{' '}
                        {'(' +
                          this.state.results.Places[1].SkyscannerCode +
                          ')'}
                      </div>
                    </>
                  )}
                </div>
                <div className="flight-directions">
                  <div className="flight-carriers">
                    {outboundCarrierNames.join(', ')}{' '}
                    {quote.Direct === false ? 'Not Direct' : 'Direct'}
                  </div>
                  <div className="airplane-icon">
                    {' '}
                    - - - - - - -<i className="fas fa-plane"></i>
                  </div>
                  {isReturn && (
                    <>
                      <div className="flight-carriers">
                        {inboundCarrierNames.join(', ')}{' '}
                        {quote.Direct === false ? 'Not Direct' : 'Direct'}
                      </div>
                      <div className="airplane-icon">
                        {' '}
                        - - - - - - -<i className="fas fa-plane"></i>
                      </div>
                    </>
                  )}
                </div>
                <div className="inbound-trip">
                  <div className="depart-time">
                    {outboundTimeFormat}{' '}
                    {this.state.results.Places[1].CityName.toUpperCase()}
                  </div>
                  <div className="destination-city">
                    {this.state.results.Places[1].Name}{' '}
                    {'(' + this.state.results.Places[1].SkyscannerCode + ')'}
                  </div>
                  <span></span>
                  {isReturn && (
                    <>
                      <div className="land-time">
                        {inboundTimeFormat}{' '}
                        {this.state.results.Places[0].CityName.toUpperCase()}
                      </div>
                      <div className="destination-city">
                        {this.state.results.Places[0].Name}{' '}
                        {'(' +
                          this.state.results.Places[0].SkyscannerCode +
                          ')'}
                      </div>
                    </>
                  )}
                </div>
                <div className="flight-price">
                  {this.state.results.Currencies[0].Symbol} {quote.MinPrice}
                  <button className="flight-button">Pick me!</button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Results;
