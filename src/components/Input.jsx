import React, { Component } from 'react';

class Input extends Component {
  state = {};
  render() {
    return (
      <div>
        <input id={this.props.type} onInput={this.props.onInput} />
        <select>
          {this.props.Places.map((option) => {
            return <option>{option.PlaceName}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Input;
