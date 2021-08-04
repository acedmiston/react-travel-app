import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Cliffs from '../images/cliffs.jpg';
import Desert from '../images/desert.jpg';
import GoldenGate from '../images/goldengate.jpg';
import India from '../images/india.jpg';
import Scotland from '../images/scotland.jpg';
import Paris from '../images/Paris.jpg';
import GreatBarrierReef from '../images/greatBarrierReef.jpg';
import GreatWall from '../images/greatwall.jpg';
import LA from '../images/LA.jpg';
import Kyoto from '../images/kyoto.jpg';
import Mars from '../images/mars.png';
import NewYork from '../images/newyork.jpg';
import Peru from '../images/Peru.jpg';
import London from '../images/London.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class ImageCarousel extends Component {
  state = {
    items: [
      { id: 1, src: Cliffs, alt: 'Ireland', text: 'Ireland' },
      { id: 2, src: Desert, alt: 'Mojave Desert', text: 'Mojave Desert' },
      { id: 3, src: GoldenGate, alt: 'San Francisco', text: 'San Francisco' },
      { id: 4, src: India, alt: 'India', text: 'India' },
      { id: 5, src: Scotland, alt: 'Scotland', text: 'Scotland' },
      { id: 6, src: Paris, alt: 'Paris', text: 'Paris' },
      { id: 7, src: GreatWall, alt: 'China', text: 'China' },
      {
        id: 8,
        src: GreatBarrierReef,
        alt: 'Great Barrier Reef',
        text: 'Great Barrier Reef',
      },
      { id: 9, src: LA, alt: 'Los Angeles', text: 'Los Angeles' },
      { id: 10, src: Kyoto, alt: 'Japan', text: 'Japan' },
      { id: 11, src: Mars, alt: 'Space X trip', text: 'Space X trip' },
      { id: 12, src: NewYork, alt: 'New York City', text: 'New York City' },
      { id: 13, src: Peru, alt: 'Peru', text: 'Peru' },
      { id: 14, src: London, alt: 'London', text: 'London' },
    ],
  };

  componentDidMount() {
    setInterval(() => {
      const result = this.shuffle(this.state.items);
      this.setState({ items: result });
    }, 7000);
  }

  shuffle(array) {
    array.sort(() => 0.5 - Math.random());
    return array;
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <div className="image-slider">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <div key={item.id} className="carousel-container">
                <div className="carousel">
                  <p className="carousel-titles">
                    {item.text} £{Math.floor(Math.random() * 1000)}
                  </p>
                  <img src={item.src} alt={item.alt} className="carousel-img" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}

export default ImageCarousel;
