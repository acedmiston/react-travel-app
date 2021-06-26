import React, { Component } from 'react';
import loginImg from './world.png';
import './login.scss';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  // not really neccessary yet
  state = { username: '', password: '' };

  // why cant i get this to redirect?
  onSubmit = () => {
    return <Redirect to="/" />;
  };

// would be nice to get this working?
  // Checking(e) {
  //   e.preventDefault();
  //   if (this.state.username === '' || this.state.password === '') {
  //     alert('Fields are required');
  //     return;
  //   } else {
  //     alert('Login Failed ! . Check Username and Password.');
  //   }

  //   console.log(`${this.state.username}`);
  // }

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="world" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" onSubmit={this.onSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
