import type * as CSS from 'csstype';

export type CSSPropertiesObject = CSS.Properties;

export type TransitionProperty =
  | 'ease'
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out';

export type FlexDirections =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export type Direction = 'vertical' | 'horizontal' | 'rtl';

export interface StyleProps {
  animationEffectType: TransitionProperty;
  animationSpeed: number | string;
  direction: Direction;
}

export interface IDynamicSliderStyleProps extends StyleProps {
  position: number;
}

export interface ICarouselConfig extends StyleProps {
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
  controls: ICarouselControl;
  carouselSliderElement: HTMLUListElement;
  sliderStyle: CSSPropertiesObject;
}
