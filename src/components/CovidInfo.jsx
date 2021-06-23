import React, { Component } from 'react';

class CovidInfo extends Component {
  render() {
    return (
      <>
        <div className="covid-boxes">
          <div className="covid-box">
            <p className="covid-title">Refunds & Cancellations</p>
            <p className="covid-text">
              Learn more about our numerous refund options like carrier
              self-service and instant refunds.
            </p>
            <button className="covid-buttons">Find out more!</button>
          </div>
          <div className="covid-box">
          <p className="covid-title">Request a Refund</p>
          <p className="covid-text">
              The fastest and easiest way to cancel your booking is online via
              our refunds & cancellations form.
            </p>
            <button className="covid-buttons">Manage My Booking</button>
          </div>
          <div className="covid-box">
          <p className="covid-title">Coronavirus information</p>
          <p className="covid-text">
              Read about how the new travel restrictions might affect your trip.
            </p>
            <button className="covid-buttons">COVID-19 Info</button>
          </div>
          <div className="covid-box">
          <p className="covid-title">Get 30% off your COVID-19 test</p>
          <p className="covid-text">
              Use the code KIWILGC with our partner LetsGetChecked and get your
              travel certificate in 24–72h.
            </p>
            <button className="covid-buttons">Order a PCR Test</button>
          </div>
        </div>
      </>
    );
  }
}

export default CovidInfo;
