import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeCarousel() {
  const imgUrl = '/assets/images/';
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${imgUrl}homeCarousel01.svg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${imgUrl}homeCarousel02.svg`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${imgUrl}homeCarousel03.svg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
