import React, { Component } from 'react';

class CurrencySelect extends Component {
  state = {};
  render() {
    return (
      <ul className="nav-dropdown">
        {this.props.currencies &&
          this.props.currencies.map((currency) => {
            return (
              <li key={currency.Code} className="dropdown-item">
                {/* html entity wouuld make it so currency symbol can be seen on all comps*/}
                <p
                  onClick={() => {
                    this.props.currencySelect(currency.Code);
                  }}
                >
                  {currency.Symbol} {currency.Code}
                </p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default CurrencySelect;
