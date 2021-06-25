import React, { Component } from 'react';
import ImageSlider from '../components/ImageCarousel';

class HotestDestinations extends Component {
  render() {
    return (
      <div className="hottest-destinations-container">
        <h1 className="hottest-destinations-title">
          Check out these hot destinations!
        </h1>
        <ImageSlider />
      </div>
    );
  }
}
export default HotestDestinations;
