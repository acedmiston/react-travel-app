import React, { Component } from 'react';
import covidMap from '../images/covidmap.png';

class CovidInfo extends Component {
  render() {
    return (
      <>
        <div className="covid-map-box">
          <div className="covid-map-info">
            <h2>Get the COVID-19 travel info you need</h2>
            <p>
              Navigate live travel entry restrictions and bans, including the
              latest info for world travellers. And sign up to get updates when
              things change.
            </p>

            <button className="map-button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.skyscanner.net/travel-restrictions"
              >
                View Live Map!
              </a>
            </button>
          </div>
          <img src={covidMap} alt="covid map" className="covid-map" />
        </div>
        <div className="covid-boxes">
          <div className="covid-box">
            <p className="covid-title">Refunds & Cancellations</p>
            <p className="covid-text">
              Learn more about our numerous refund options like carrier
              self-service and instant refunds.
            </p>
            <button className="covid-buttons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.kiwi.com/en/?help=%2Ffaq%2Fsearch%2Farticle%2F155"
              >
                Find out more!
              </a>
            </button>
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
            <button className="covid-buttons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.kiwi.com/en/help/covid-19-coronavirus-169/"
              >
                COVID-19 Info
              </a>
            </button>
          </div>
          <div className="covid-box">
            <p className="covid-title">Get 30% off your COVID-19 test</p>
            <p className="covid-text">
              Use the code KIWILGC with our partner LetsGetChecked and get your
              travel certificate in 24–72h.
            </p>
            <button className="covid-buttons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.letsgetchecked.com/gb/en/home-coronavirus-test/?irgwc=1&clickid=35Kx0vVqZxyLR%3A3SfUwr31IaUkB3T7wkCzBHU80&utm_source=impact&utm_medium=affiliates&utm_campaign=8695&utm_content=Online%20Tracking%20Link_ONLINE_TRACKING_LINK_&utm_term=2739758_"
              >
                Order a PCR Test
              </a>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CovidInfo;
