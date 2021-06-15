import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" id="myNav">
          <div className="brand-logo">
            {/* <img src="./ACE.svg" alt="Aaron Logo" /> */}
          </div>
          {/* <a href="/" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a> */}
          <div className="navbar-links">
            <ul>
            <li>
                <a href="/">Hottest Destinations</a>
              </li>
            <li>
                <a href="/">Flight Deals</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li className="menu-icons">
                <a
                  href="https://github.com/acedmiston"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={['fas', 'github']}
                    style={{ fontSize: '20px' }}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li className="menu-icons">
                <a
                  href="https://www.linkedin.com/in/aaronedmiston/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: '20px' }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
