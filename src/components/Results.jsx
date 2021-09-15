import React, { Component } from 'react';

class Results extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="display-results">
        {this.props.results &&
          this.props.results.Quotes.length > 0 &&
          this.props.results.Quotes.map((quote) => {
            let inboundDateFormat, inboundTimeFormat;
            let inboundCarrierNames = [];
            let isReturn = false;

            if (this.props.flightDirection === 'return') {
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
                  const inboundCarrierFound = this.props.results.Carriers.find(
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

            // if(this.props.state.numberNomaders >= 1){
            //   const totalNomaders = this.props.state.numberNomaders *= quote.minPrice;
            //   return totalNomaders;
            // }

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
                const outboundCarrierFound = this.props.results.Carriers.find(
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
                    {this.props.results.Places[0].CityName.toUpperCase()}
                  </div>
                  <div className="origin-city">
                    {this.props.results.Places[0].Name}{' '}
                    {'(' + this.props.results.Places[0].SkyscannerCode + ')'}
                  </div>
                  <br></br>
                  {isReturn && (
                    <>
                      <p>Return:</p>
                      <div className="land-date">{inboundDateFormat}</div>
                      <div className="land-time">
                        {inboundTimeFormat}{' '}
                        {this.props.results.Places[1].CityName.toUpperCase()}
                      </div>
                      <div className="origin-city">
                        {this.props.results.Places[1].Name}{' '}
                        {'(' +
                          this.props.results.Places[1].SkyscannerCode +
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
                    {this.props.results.Places[1].CityName.toUpperCase()}
                  </div>
                  <div className="destination-city">
                    {this.props.results.Places[1].Name}{' '}
                    {'(' + this.props.results.Places[1].SkyscannerCode + ')'}
                  </div>
                  <span></span>
                  {isReturn && (
                    <>
                      <div className="land-time">
                        {inboundTimeFormat}{' '}
                        {this.props.results.Places[0].CityName.toUpperCase()}
                      </div>
                      <div className="destination-city">
                        {this.props.results.Places[0].Name}{' '}
                        {'(' +
                          this.props.results.Places[0].SkyscannerCode +
                          ')'}
                      </div>
                    </>
                  )}
                </div>
                <div className="flight-price">
                  {this.props.results.Currencies[0].Symbol} {quote.MinPrice}
                  <button className="flight-button">Pick me!</button>
                </div>
              </div>
            );
          })}

        {this.props.results && this.props.results.Quotes.length === 0 && (
          <div className="no-results">
            <h1>No Flights found!</h1>
            <p>Please try a different search.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Results;
