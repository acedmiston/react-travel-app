import React, { Component } from 'react';

class FlightInput extends Component {
  state = {};
  render() {
    return (
      <div className="flight-direction">
        <input
          value={this.props.value}
          id={this.props.type}
          onInput={this.props.onInput}
          onFocus={() => this.props.onClear(this.props.type)}
        />
        {this.props.showDropDown && (
          <ul className="drop-down">
            {this.props.Places.map((option) => {
              return (
                <li
                  key={option.PlaceId}
                  className="airport-list"
                  onClick={() =>
                    this.props.onAirportSelect(option, this.props.type)
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
