import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import CurrencySelect from './CurrencySelect';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import '../navbar.css';

class Navbar extends Component {
  state = {
    isMenu: false,
    isResponsiveclose: false,
    isMenuSubMenu: false,
  };

  render() {
    const { isMenu, isResponsiveclose, isMenuSubMenu } = this.state;

    const toggleClass = () => {
      this.setState({ isMenu: false ? true : false });
      this.setState({ isResponsiveclose: false ? true : false });
    };

    let boxClass = ['main-menu menu-right menuq1'];
    if (isMenu) {
      boxClass.push('menuq2');
    } else {
      boxClass.push('');
    }

    const toggleSubmenu = () => {
      this.setState({ isMenuSubMenu: false ? true : false });
    };

    let boxClassSubMenu = ['sub__menus'];
    if (isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
    } else {
      boxClassSubMenu.push('');
    }
    return (
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
              <NavLink
                exact
                activeClassName="is-active"
                to="/"
                className="nav-logo"
              >
                Nomader
                <i className="fas fa-plane"></i>
              </NavLink>
            </div>

            <div className="header__middle__menus">
              <nav className="main-nav ">
                {/* Responsive Menu Button */}
                {isResponsiveclose ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: 'none' }}
                      onClick={toggleClass}
                    >
                      {' '}
                      <FiXCircle />{' '}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: 'none' }}
                      onClick={toggleClass}
                    >
                      {' '}
                      <FiAlignRight />{' '}
                    </span>
                  </>
                )}

                <ul className={boxClass.join(' ')}>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/flight-deals`}
                    >
                      {' '}
                      Flight Deals{' '}
                    </NavLink>{' '}
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/hottest-destinations`}
                    >
                      {' '}
                      Hottest Destinations{' '}
                    </NavLink>{' '}
                  </li>
                  <li
                    onClick={toggleSubmenu}
                    className="menu-item sub__menus__arrows"
                  >
                    {' '}
                    <NavLink to="#">
                      {' '}
                      <p className="display-currency">{this.props.currency}</p>
                      <FiChevronDown />{' '}
                    </NavLink>
                    <div>
                      <ul className={boxClassSubMenu.join(' ')}>
                        {this.props.currencies &&
                          this.props.currencies.map((currency) => {
                            return (
                              <li key={currency.Code}>
                                {/* html entity needed for currency symbol so all comps can see it */}
                                <p
                                  className="currency"
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
                    </div>
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Contact`}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      exact
                      activeClassName="is-active"
                      onClick={toggleClass}
                      to={`/`}
                    >
                      Home
                    </NavLink>
                  </li>
                  {this.props.isLoggedIn ? (
                    //Log-out : clear local local storage and set loggedin to be false
                    <li className="menu-item">
                      <NavLink
                        onClick={() => {
                          localStorage.clear();
                          this.props.updateLoggedIn();
                          
                        }}
                        to={`/`}
                      >
                        Log out
                      </NavLink>
                    </li>
                  ) : (
                    <li className="menu-item">
                      <NavLink
                        activeClassName="is-active"
                        onClick={toggleClass}
                        to={`/login`}
                      >
                        {' '}
                        Login/Signup{' '}
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
