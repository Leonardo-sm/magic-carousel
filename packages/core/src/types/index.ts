// export interface ICaroselConfig {
//   slidesToShow: number;
// }
// export interface ICarouselControl {
//   currentSlide: number;
//   goToNextSlide: () => number;
//   goToPrevSlide: () => number;
//   goToSlideIndex: (i: number) => number;
// }

// export interface ICarousel {
//   slidesLen: number;
//   currentSlide: number;
//   children: HTMLLIElement[];
//   controls: ICarouselControl;
//   carouselSlider: HTMLUListElement;
// }

export interface ICarouselItems {
  /**
   * Function to rendering a React component.
   * @returns React.ReactNode
   */
  child: () => unknown;
}

export interface ICarousel {
  /**
   * Property to receive a items collection.
   */
  items: ICarouselItems[];
}

export interface IReturnItem {
  /**
   * Property to define a unique identity for an item.
   */
  id: number;
  /**
   * Function to render a carousel child component
   * @returns React.ReactNode
   */
  child: () => unknown;
  getProps: () => {
    style: { width: number; flexShrink: 0 };
  };
}

export interface ICarouselState {
  /**
   * A index for the current focus rendered item.
   */
  currentIndex: number;
  /**
   * A index list for the items visible on screen.
   */
  // visibleItems: number[];
  /**
   * A index for a next item to rendered in order list.
   */
  // nextItem: number;
  /**
   * A index for a previous item in rendered list.
   */
  // prevItem: number;
  /**
   * Length to the total for the carousel items.
   */
  // size: number;
}

export interface ICarouselReturn {
  /**
   * Property to return a processed items collections
   */
  items: IReturnItem[];
  container: {
    getProps: <TRef extends HTMLElement>() => {
      ref: React.RefObject<TRef>;
      style: {
        display: 'flex';
        margin: 0;
        padding: 0;
        listStyle: 'none';
        transform: string;
        transition: string;
      };
    };
  };
  /**
   * Property to contains a state properties.
   */
  state: ICarouselState;
  /**
   * Property to contain a control methods.
   */
  triggers: ICarouselHandlers;
}
