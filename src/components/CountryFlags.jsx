import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';

class CountryFlags extends Component {
  state = {};
  render() {
    return (
      <div style={{paddingRight: '15px'}}>
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          title="GB"
        />
        {/* <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          title="US"
        /> */}
      </div>
    );
  }
}

export default CountryFlags;
