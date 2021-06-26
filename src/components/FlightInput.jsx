import React, { Component } from 'react';

class FlightInput extends Component {
  state = {};
  render() {
    return (
      <div className="flight-direction">
        <input
          value={this.props.countrySelection}
          id={this.props.type}
          onInput={this.props.onInput}
        />

        {this.props.showDropDown && (
          <ul className="drop-down">
            {this.props.Places.map((option) => {
              return (
                <li
                  className="airport-list"
                  onClick={() =>
                    this.props.onAirportSelect(
                      option,
                      this.props.type
                    )
                  }
                >
                  {option.PlaceName}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default FlightInput;
