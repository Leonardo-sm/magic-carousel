import type { CSSPropertiesObject, ICarousel, ICarouselConfig } from '../types';

import CarouselControls from './CarouselControls';
import { setDynamicProps } from '../style/setDynamicProps';

class Carousel implements ICarousel {
  carouselSliderElement: HTMLUListElement;
  slidesLen: number;

  currentSlide = 0;
  controls: CarouselControls;
  private _children: HTMLLIElement[];

  sliderStyle: CSSPropertiesObject;

  constructor(
    carouselSliderElement: HTMLUListElement,
    {
      animationSpeed = 0.3,
      slidesToShow,
      animationEffectType = 'ease-in-out',
    }: Partial<ICarouselConfig>
  ) {
    this.carouselSliderElement = carouselSliderElement;
    this.slidesLen = carouselSliderElement.children.length - 1;
    this._children =
      carouselSliderElement.children as unknown as HTMLLIElement[];
    this.controls = new CarouselControls(this.slidesLen);

    this.sliderStyle = setDynamicProps({
      direction: 'horizontal',
      position: 0,
      animationSpeed,
      animationEffectType,
    });
  }

  get children() {
    return this._children;
  }

  set children(children: HTMLLIElement[]) {
    this._children = children;
  }
}

export default Carousel;
