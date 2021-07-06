import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Cliffs from '../images/cliffs.jpg';
import Desert from '../images/desert.jpg';
import GoldenGate from '../images/goldengate.jpg';
import India from '../images/india.jpg';
import Scotland from '../images/scotland.jpg';
import Paris from '../images/Paris.jpg';
import GreatBarrierReef from '../images/greatBarrierReef.JPG';
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
      { id: 1, src: Cliffs },
      { id: 2, src: Desert },
      { id: 3, src: GoldenGate },
      { id: 4, src: India },
      { id: 5, src: Scotland },
      { id: 6, src: Paris },
      { id: 7, src: GreatWall },
      { id: 8, src: GreatBarrierReef },
      { id: 9, src: LA },
      { id: 10, src: Kyoto },
      { id: 11, src: Mars },
      { id: 12, src: NewYork },
      { id: 13, src: Peru },
      { id: 14, src: London },
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
                  <img src={item.src} alt="" className="carousel-img" />
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
