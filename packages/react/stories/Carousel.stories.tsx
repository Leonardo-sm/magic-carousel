import CarouselItem from '../src/components/CarouselItem';
import CarouselSlider from '../src/components/CarouselSlider';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Carousel',
  component: CarouselSlider,
  parameters: {},
} as ComponentMeta<typeof CarouselSlider>;

export const Default = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goToNextSlide() {
    setCurrentSlide((prev) => prev + 1);
  }

  function goToPrevSlide() {
    setCurrentSlide((prev) => prev - 1);
  }

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={goToPrevSlide}>Anterior</button>
      <div style={{ display: 'flex', overflowX: 'hidden', width: 1200 }}>
        <CarouselSlider currentSlideIndex={currentSlide}>
          <CarouselItem>
            <div
              style={{
                height: 120,
                backgroundColor: 'red',
                border: '5px solid black',
              }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                height: 120,
                backgroundColor: 'green',
                border: '5px solid black',
              }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                height: 120,
                backgroundColor: 'blue',
                border: '5px solid black',
              }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                height: 120,
                backgroundColor: 'coral',
                border: '5px solid black',
              }}
            ></div>
          </CarouselItem>
        </CarouselSlider>
      </div>
      <button onClick={goToNextSlide}>Proximo</button>
    </div>
  );
};
