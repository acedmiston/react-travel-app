import React, { Component } from 'react';
// import ReactCountryFlag from 'react-country-flag';
// import countryData from './country-data';

class CountryFlags extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="lang-menu">
        <div className="selected-lang">
          <p className="display-country">{this.props.locale}</p>
        </div>
        <ul>
          {this.props.locales &&
            this.props.locales.map((locale) => {
              return (
                // <li key={this.props.name}>
                <li>
                  <p
                    className="nav-links"
                    onClick={() => this.props.setSelectedLocale(locale.Name)}
                  >
                    {locale.Name}
                  </p>
                </li>
              );
            })}
        </ul>

        {/* 
        <ul>
          {this.props.currencies &&
            this.props.currencies.map((currency) => {
              return (
                <li>
                
                  <p
                    className="nav-links"
                    onClick={() =>
                      this.props.currencySelect(currency.Symbol, currency.Code)
                    }
                  >
                    {currency.Symbol} {currency.Code}
                  </p>
                </li>
              );
            })}
        </ul>
      </div> */}

        {/* {countryData.map((country) => (
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
            ))} */}
        {/* <li
            onClick={this.props.setSelectedLocale}
            value={this.props.selectedLocale}
          >
            {this.props.locales &&
              // need to add this.props.locales.Currencies?
              this.props.locales.map((locale) => {
                return (
                  <p className="nav-links" key={locale.Code} value={locale.Code}>
                    {locale.Name}
                  </p>
                );
              })}
          </li> */}
        {/* <ul>
          <li>
            <p
              className="nav-links"
              onClick={() => this.props.setSelectedLocale('en-GB')}
            >
              United Kingdom
            </p>
          </li>
          <li>
            <p
              className="nav-links"
              onClick={() => this.props.setSelectedLocale('en-US')}
            >
              United States
            </p>
          </li>
          <li>
            <p
              className="nav-links"
              onClick={() => this.props.setSelectedLocale('en-CA')}
            >
              Canada
            </p>
          </li>
          <li>
            <p
              className="nav-links"
              onClick={() => this.props.setSelectedLocale('en-AU')}
            >
              Australia
            </p>
          </li> 
        </ul>*/}
      </div>
    );
  }
}

export default CountryFlags;
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

// onClick = (e) => {
//   this.setState(
//     {
//       [e.target.countryCode]: e.target.value,
//       [e.target.alt]: e.target.value,
//     },
//     () => {
//       console.log(this.state);
//     }
//   );
// };
