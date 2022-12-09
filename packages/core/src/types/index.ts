export interface ICaroselConfig {
  slidesToShow: number;
}
export interface ICarouselControl {
  currentSlide: number;
  goToNextSlide: () => number;
  goToPrevSlide: () => number;
  goToSlideIndex: (i: number) => number;
}

export interface ICarousel {
  slidesLen: number;
  currentSlide: number;
  children: HTMLLIElement[];
  controls: ICarouselControl;
  carouselSlider: HTMLUListElement;
}
