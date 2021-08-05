import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import CurrencySelect from './CurrencySelect';
import '../navbar.css';

class Nav3 extends Component {
  state = {
    showNav: false,
  };

  toggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  render() {
    let activeNav = ['nav-items'];
    if (this.state.showNav) {
      activeNav.push('active');
    }

    return (
      <nav className="navbar">
        <div className="logo">
          <NavLink exact to="/">
            Nomader
            <i className="fas fa-plane"></i>
          </NavLink>
        </div>
        <div className="nav-holder">
          <NavLink to={'#'} className="toggle-button" onClick={this.toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </NavLink>
          <ul className={activeNav.join(' ')}>
            <li className="nav-item">
              <NavLink activeClassName="is-active" to={`/flight-deals`}>
                Flight Deals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="is-active" to={`/hottest-destinations`}>
                Hottest Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`#`} className="currency">
                {this.props.currency}
                <FiChevronDown className="chevron" />
              </NavLink>
              <CurrencySelect
                currencies={this.props.currencies}
                currencySelect={this.props.currencySelect}
              />
            </li>
            <li className="nav-item">
              <NavLink activeClassName="is-active" to={`/Contact`}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="is-active" to={`/`}>
                Home
              </NavLink>
            </li>
            {this.props.isLoggedIn ? (
              <li>
                <NavLink
                  onClick={() => {
                    localStorage.clear();
                    this.props.updateLoggedIn();
                  }}
                  to={`/login`}
                >
                  Log out
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink activeClassName="is-active" to={`/login`}>
                  Login/Signup
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
      // </div>
    );
  }
}

export default Nav3;
