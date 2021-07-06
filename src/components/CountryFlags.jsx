import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Link } from 'react-router-dom';
import countryData from './country-data';

class CountryFlags extends Component {
  state = { countryCode: '', alt: '' };
  render() {
    return (
      <div className="lang-menu">
        <div className="selected-lang">{this.state.countryCode}</div>
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <ul>
            {countryData.map((country) => (
              <li>
                <Link to="#">
                  <ReactCountryFlag
                    alt={country.iso2_cc}
                    countryCode={country.iso2_cc}
                    key={`${country.iso2_cc}_${country.e164_cc}_emoji`}
                    style={{
                      fontSize: '2em',
                    }}
                    onClick={this.onClick}
                    className="country-flag"
                  />
                  <span className="country-name">{this.state.alt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
    // return (
    //   <div className="lang-menu">
    //     <div className="selected-lang"></div>
    //     <ul>
    //       <li>
    //         <Link to="#">
    //           <ReactCountryFlag
    //             className="nav-links GB"
    //             countryCode="GB"
    //             svg
    //             style={{
    //               width: '2em',
    //               height: '2em',
    //             }}
    //             title="GB"
    //           />
    //           <span className="country-name">UK</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="#">
    //           <ReactCountryFlag
    //             className="nav-links US"
    //             countryCode="US"
    //             svg
    //             style={{
    //               width: '2em',
    //               height: '2em',
    //             }}
    //             title="US"
    //           />
    //           <span className="country-name">US</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="#">
    //           <ReactCountryFlag
    //             className="nav-links CA"
    //             countryCode="CA"
    //             svg
    //             style={{
    //               width: '2em',
    //               height: '2em',
    //             }}
    //             title="CA"
    //           />
    //           <span className="country-name">CA</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="#">
    //           <ReactCountryFlag
    //             className="nav-links AU"
    //             countryCode="AU"
    //             svg
    //             style={{
    //               width: '2em',
    //               height: '2em',
    //             }}
    //             title="AU"
    //           />
    //         <span className="country-name">AU</span>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // );
  }

  onClick = (e) => {
    this.setState(
      {
        [e.target.countryCode]: e.target.value,
        [e.target.alt]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
}

export default CountryFlags;
