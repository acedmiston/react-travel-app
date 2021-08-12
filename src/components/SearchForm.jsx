import React, { Component } from 'react';
import FlightInput from './FlightInput';

class SearchForm extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="outer-box">
          <div className="radio-container">
            <div className="radio">
              <label htmlFor="radio" className="radio-label">
                <input
                  type="radio"
                  name="flightDirection"
                  value="return"
                  checked={this.props.flightDirection === 'return'}
                  className="form-check-input"
                  onChange={this.props.onChange}
                />
                <div className="form-check-circle"></div>
                <span>Return</span>
              </label>
            </div>
            <div className="radio">
              <label htmlFor="radio" className="radio-label">
                <input
                  type="radio"
                  name="flightDirection"
                  value="one-way"
                  checked={this.props.flightDirection === 'one-way'}
                  className="form-check-input"
                  onChange={this.props.onChange}
                />
                <div className="form-check-circle"></div>
                <span>One way</span>
              </label>
            </div>
          </div>
          <div className="input-fields">
            <div>
              <label htmlFor="originAirport">Origin</label>
              <FlightInput
                type={'originAirport'}
                showDropDown={
                  //we use this.props.state because we are passing the whole state in
                  this.props.state.originAirport.Places.length > 0 && true
                }
                value={this.props.state.originAirportInputValue}
                Places={this.props.state.originAirport.Places}
                onInput={this.props.onInput}
                onAirportSelect={this.props.onAirportSelect}
                onClear={this.props.onClear}
              />
            </div>
            <div>
              <label htmlFor="destinationAirport">Destination</label>
              <FlightInput
                type={'destinationAirport'}
                showDropDown={
                  this.props.state.destinationAirport.Places.length > 0 && true
                }
                Places={this.props.state.destinationAirport.Places}
                onInput={this.props.onInput}
                value={this.props.state.destinationAirportInputValue}
                onAirportSelect={this.props.onAirportSelect}
                onClear={this.props.onClear}
              />
            </div>
            <div>
              <label htmlFor="depart">Depart</label>
              <div>
                <input
                  id="depart"
                  type="date"
                  name="outBoundDate"
                  onChange={this.props.onChange}
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="return">Return</label>
              <div>
                <input
                  id="return"
                  type="date"
                  name="inBoundDate"
                  onChange={this.props.onChange}
                  disabled={this.props.state.flightDirection === 'one-way'}
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="numbers"># Nomaders</label>
              <div>
                <input
                  id="numbers"
                  className="number-input"
                  name="numberNomaders"
                  type="number"
                  min="0"
                  onChange={this.props.onChange}
                ></input>
              </div>
            </div>
            <button
              className="results-button"
              onClick={this.props.onSubmit}
              disabled={!this.props.isEnabled}
            >
              Let's go! <i className="fas fa-plane"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
