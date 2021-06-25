import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CurrencySelect extends Component {
  state = {};
  render() {
    return (
      <div className="currency-menu">
        <div className="selected-currency">
          <p className="display-currency">£</p>
        </div>
        <ul>
          <li>
            <Link to="#">
              <p className="currency-symbol nav-links">£ GBP</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p className="currency-symbol nav-links">$ USD</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p className="currency-symbol nav-links">$ CAD</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p className="currency-symbol nav-links">$ AUD</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CurrencySelect;
