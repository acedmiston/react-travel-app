import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Link } from 'react-router-dom';

class CountryFlags extends Component {
  state = {};
  render() {
    return (
      <div className="lang-menu">
        <div className="selected-lang"></div>
        <ul>
          <li>
            <Link to="#">
              <ReactCountryFlag
                className="nav-links GB"
                countryCode="GB"
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title="GB"
              />
              <span className="country-name">UK</span> 
            </Link>
          </li>
          <li>
            <Link to="#">
              <ReactCountryFlag
                className="nav-links US"
                countryCode="US"
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title="GB"
              />
              <span className="country-name">US</span>  
            </Link>
          </li>
          <li>
            <Link to="#">
              <ReactCountryFlag
                className="nav-links CA"
                countryCode="CA"
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title="CA"
              />
              <span className="country-name">CA</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <ReactCountryFlag
                className="nav-links AU"
                countryCode="AU"
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title="AU"
              />
            <span className="country-name">AU</span>    
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CountryFlags;
