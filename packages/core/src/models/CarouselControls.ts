export interface ICarouselTriggers {
  goToNextItem: () => void;
  /**
   * Function to move for the previous item to the list.
   */
  goToPrevItem: () => void;
  /**
   * Function to move for a specific item to the list.
   */
  goToIndex: (index: number) => void;
}

class CarouselControls implements ICarouselTriggers {
  size: number;

  currentItem = 0;

  constructor(slidesLen: number) {
    this.slidesLen = slidesLen - 1;
  }

  goToNextItem() {
    if (this.currentSlide < this.slidesLen) {
      this.currentSlide += 1;
    }
    return this.currentSlide;
  }

  goToPrevItem() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    }
    return this.currentSlide;
  }

  goToIndex(index: number) {
    if (index <= this.slidesLen && index >= 0) {
      this.currentSlide = index;
    }
    return this.currentSlide;
  }
}

export default CarouselControls;
