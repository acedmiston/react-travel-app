import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Cliffs from '../images/cliffs.jpg';
import Desert from '../images/desert.jpg';
import GoldenGate from '../images/goldengate.jpg';
import India from '../images/india.jpg';
import Scotland from '../images/scotland.jpg';
import { Link } from 'react-router-dom';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class ImageSlider extends Component {
  state = {
    items: [
      { id: 1, src: Cliffs },
      { id: 2, src: Desert },
      { id: 3, src: GoldenGate },
      { id: 4, src: India },
      { id: 5, src: Scotland },
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
              <div className="carousel-container">
                <div key={item.id} className="carousel">
                  <Link to="/hottest-destinations">
                    <img src={item.src} alt="" className="carousel-img" />
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}

export default ImageSlider;

//shuffle(array){
// let currentIndex = array.length,
//   randomIndex;

// // While there remain elements to shuffle...
// while (0 !== currentIndex) {
//   // Pick a remaining element...
//   randomIndex = Math.floor(Math.random() * currentIndex);
//   currentIndex--;

//   // And swap it with the current element.
//   [array[currentIndex], array[randomIndex]] = [
//     array[randomIndex],
//     array[currentIndex],
//   ];

// }

// return array;
//}
