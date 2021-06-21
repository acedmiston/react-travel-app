import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  // const [click, setClick] = useState(false);

  //  const handleClick = () => setClick(!click);

  state = { click: false };

  handleClick = () => this.setState({ click: !this.state.click });

  render() {
    const { click } = this.state;
    return (
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exct to="/" className="nav-logo">
            Nomader
            <i className="fas fa-plane"></i>
          </NavLink>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/flight-deals"
                activeClassName="active"
                className="nav-links"
                onClick={this.handleClick}
              >
                Flight Deals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/hottest-destinations"
                activeClassName="active"
                className="nav-links"
                onClick={this.handleClick}
              >
                Hottest Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={this.handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={this.handleClick}
              >
                Home
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={this.handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
