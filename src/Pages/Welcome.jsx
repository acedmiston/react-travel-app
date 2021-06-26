import React, { Component } from 'react';
import './login/welcome.scss';
import Login from './login/Login';
import Register from './login/Register';

class Welcome extends Component {
  state = { isLoginActive: true };
  
  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add('right');
  }

  changeState() {
    // DOM doesnt like this for some reason
    const { isLoginActive } = this.state;

    if (isLoginActive) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }
    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }));
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? 'Register' : 'Login';
    const currentActive = isLoginActive ? 'Login' : 'Register';
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLoginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLoginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default Welcome;
