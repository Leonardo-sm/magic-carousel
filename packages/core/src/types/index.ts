export interface ICarousel {
  currentSlide: number;
  goToNextSlide: () => number;
  goToPrevSlide: () => number;
  goToSlideIndex: (i: number) => number;
}
