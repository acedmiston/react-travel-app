import React, { Component } from 'react';
import ImageSlider from '../components/ImageCarousel';

class FightDeals extends Component {
  render() {
    return (
      <div className="flight-deals-container">
        <h1 className="flight-deals-title">
          Look at these deals, just for you
        </h1>
        <ImageSlider />
      </div>
    );
  }
}

export default FightDeals;
