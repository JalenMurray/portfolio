import { useState, useEffect } from 'react';

import { Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { CarouselRow, ArrowContainer, CarouselImageContainer, CarouselDescriptionContainer } from './carousel.styles';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState({});

  useEffect(() => {
    setSlide(slides[currentIndex]);
  }, [currentIndex, slides]);

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const ArrowProps = {
    fontSize: '6rem',
  };

  return (
    <CarouselRow>
      <ArrowContainer onClick={handleLeftClick} xs="1">
        <ChevronLeft style={ArrowProps} />
      </ArrowContainer>
      <Col xs="10">
        <CarouselImageContainer $image={slide.image}></CarouselImageContainer>
        <CarouselDescriptionContainer>
          <h1>{slide.label}</h1>
          {/* <p>{slide.description}</p> */}
        </CarouselDescriptionContainer>
      </Col>
      <ArrowContainer onClick={handleRightClick} xs="1">
        <ChevronRight style={ArrowProps} />
      </ArrowContainer>
    </CarouselRow>
  );
};

export default Carousel;
