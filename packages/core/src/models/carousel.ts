import CarouselControls from './CarouselControls';
import { ICarousel } from '../types';

class Carousel implements ICarousel {
  carouselSlider: HTMLUListElement;
  slidesLen: number;

  currentSlide = 0;
  controls: CarouselControls;
  private children: HTMLLIElement[];

  constructor(carouselSliderRef: HTMLUListElement) {
    this.carouselSlider = carouselSliderRef;
    this.slidesLen = carouselSliderRef.children.length - 1;
    this.children = carouselSliderRef.children as unknown as HTMLLIElement[];
    this.controls = new CarouselControls(this.slidesLen);
  }

  get setchildren() {
    return this.children;
  }

  set setchildren(child: HTMLLIElement) {
    this.children.push(child);
  }
}

export default Carousel;
