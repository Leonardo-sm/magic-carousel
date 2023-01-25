import type {
  CSSPropertiesObject,
  Direction,
  FlexDirections,
  IDynamicSliderStyleProps,
} from '../types';

import { carouselSliderStyle } from './carouselSliderStyle';

export function setDynamicProps({
  animationEffectType,
  animationSpeed,
  position,
  direction,
}: IDynamicSliderStyleProps): CSSPropertiesObject {
  const directions: Record<Direction, FlexDirections> = {
    vertical: 'row',
    horizontal: 'column',
    rtl: 'row-reverse',
  };

  const transitionDuration =
    typeof animationSpeed === 'string' ? animationSpeed : `${animationSpeed}ms`;

  return {
    ...carouselSliderStyle,
    flexDirection: directions[direction],
    transitionProperty: animationEffectType,
    transitionDuration,
    transform: `translateX(${position})px`,
  };
}
