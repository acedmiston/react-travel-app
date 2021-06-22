import React, { Component } from 'react';

class CountryFlag extends Component {
  state = {
    imageSrc: '',
    imageAlt: '',
  };

  handleChange(e) {
    const countryCode = e.target.getAttribute('data-countryCode').toLowerCase();
    this.setState({
      imageSrc: 'https://flagpedia.net/data/flags/h80/' + countryCode + '.webp',
      imageAlt: countryCode,
    });
  }

  render() {
    return (
      <div>
        <select id="country" onChange={this.handleChange}>
          <option data-countryCode="IN" value="91">
            India
          </option>
          <option data-countryCode="US" value="1">
            US
          </option>
          <option data-countryCode="GB" value="44">
            UK
          </option>
        </select>

        <div class="image">
          <img
            src={this.state.imageSrc}
            id="img-change"
            alt={this.state.imageAlt}
          />
        </div>
      </div>
    );
  }
}

export default CountryFlag;
