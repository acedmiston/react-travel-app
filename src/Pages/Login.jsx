import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import '../login.css';

class Login extends Component {
  state = {
    addClass: false,
  };

  toggle = () => {
    this.setState({ addClass: !this.state.addClass });
  };

  onSignupSubmit = async (e) => {
    e.preventDefault();
    const results = await axios.post('http://localhost:6002/sign-up', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    });
    console.log(results);
    if (results.data.received === true) {
      //make a thank you message and send back to home page
      swal({
        title: 'Thanks for joining us!',
        text: 'Your adventures await...',
        type: 'success',
      });
      setTimeout(() => this.props.history.push('/'), 2000);
    }
  };

  onLoginSubmit = async (e) => {
    e.preventDefault();
    const results = await axios.post('http://localhost:6002/log-in', {
      email: this.state.email,
      password: this.state.password,
    });
    console.log(results);
    if (results.data.token) {
      localStorage.setItem('token', results.data.token);
      this.props.updateLoggedIn();
      swal({
        title: 'Welcome back!',
        text: 'Your adventures await...',
        type: 'success',
      });
      setTimeout(() => this.props.history.push('/'), 2000);
    } else {
      alert('Your login was incorrect');
    }
  };

  onUserInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);

    let container = ['login-container'];
    if (this.state.addClass) {
      container.push('right-panel-active');
    }

    return (
      <div className={container.join(' ')} onInput={this.onUserInput}>
        <div className="form-container sign-up-container">
          <form action="#" className="signup-form">
            <h1 className="login-h1">Create Account</h1>
            <div className="social-container">
              <Link to="#" className="social login-link">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social login-link">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="social login-link">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <span className="login-span">or use your email to register</span>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="login-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="login-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              name="password"
            />
            <button className="login-button" onClick={this.onSignupSubmit}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="signin-form">
            <h1 className="login-h1">Sign in</h1>
            <div className="social-container">
              <Link to="#" className="social login-link">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social login-link">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="social login-link">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <span className="login-span">or use your account</span>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              name="password"
            />
            <div className="forget-password">
              <Link to="#" className="login-link">
                Forgot your password?
              </Link>
            </div>
            <button className="login-button" onClick={this.onLoginSubmit}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-h1">Welcome, Nomader!</h1>
              <p className="login-p">
                To keep connected with us sign in,
                <br></br>
                or create and account with your info on the right!
              </p>
              <button className="ghost login-button" onClick={this.toggle}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-h1">Hey, Nomader!</h1>
              <p className="login-p">
                Sign in to the left or
                <br></br>
                Sign up and start exploring with us today!
              </p>
              <button className="ghost login-button" onClick={this.toggle}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
