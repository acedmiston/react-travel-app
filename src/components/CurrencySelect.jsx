import React, { Component } from 'react';

class CurrencySelect extends Component {
  state = {};
  render() {
    return (
      <div className="currency-menu">
        <div className="selected-currency">
          <p className="display-currency">
            {this.props.currency === 'GBP' && '£ GBP'}
            {this.props.currency === 'USD' && '$ USD'}
            {this.props.currency === 'CAD' && '$ CAD'}
            {this.props.currency === 'AUD' && '$ AUD'}
    
          </p>
        </div>
        <ul>
          <li>
            <p
              className="currency-symbol nav-links"
              onClick={() => this.props.currencySelect('GBP')}
            >
              £ GBP
            </p>
          </li>
          <li>
            <p
              className="currency-symbol nav-links"
              onClick={() => this.props.currencySelect('USD')}
            >
              $ USD
            </p>
          </li>
          <li>
            <p
              className="currency-symbol nav-links"
              onClick={() => this.props.currencySelect('CAD')}
            >
              $ CAD
            </p>
          </li>
          <li>
            <p
              className="currency-symbol nav-links"
              onClick={() => this.props.currencySelect('AUD')}
            >
              $ AUD
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CurrencySelect;
