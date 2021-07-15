import React, { Component } from 'react';

class CurrencySelect extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="currency-menu">
        <div className="selected-currency">
          <p className="display-currency">{this.props.currency}</p>
        </div>
        <ul>
          {this.props.currencies &&
            this.props.currencies.map((currency) => {
              return (
                // <li key={this.props.name}>
                <li>
                  {/* html entity needed for currency symbol so all comps can see it */}
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
      </div>
    );
  }
}

export default CurrencySelect;
