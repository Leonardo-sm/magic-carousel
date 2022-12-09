import { ICarouselControl } from '../types';

class CarouselControls implements ICarouselControl {
  slidesLen: number;

  currentSlide = 0;

  constructor(slidesLen: number) {
    this.slidesLen = slidesLen - 1;
  }

  goToNextSlide() {
    if (this.currentSlide < this.slidesLen) {
      this.currentSlide += 1;
    }
    return this.currentSlide;
  }

  goToPrevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    }
    return this.currentSlide;
  }

  goToSlideIndex(index: number) {
    if (index <= this.slidesLen && index >= 0) {
      this.currentSlide = index;
    }
    return this.currentSlide;
  }
}

export default CarouselControls;
