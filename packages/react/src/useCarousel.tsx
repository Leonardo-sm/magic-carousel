import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ICarouselItems {
  /**
   * Function to rendering a React component.
   * @returns React.ReactNode
   */
  child: () => ReactNode;
}

interface IUseCarousel {
  /**
   * Property to receive a items collection.
   */
  items: ICarouselItems[];
}

interface IReturnItem {
  /**
   * Property to define a unique identity for an item.
   */
  id: number;
  /**
   * Function to render a carousel child component
   * @returns React.ReactNode
   */
  child: () => ReactNode;
  getProps: () => {
    style: { width: number; flexShrink: 0 };
  };
}

interface IUseCarouselReturn {
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
        overflowX: 'hidden';
        listStyle: 'none';
      };
    };
  };
  /**
   * Property to contains a state properties.
   */
  // state: {
  //   /**
  //    * A index for the current focus rendered item.
  //    */
  //   currentIndex: number;
  //   /**
  //    * A index list for the items visible on screen.
  //    */
  //   visibleItems: number[];
  //   /**
  //    * A index for a next item to rendered in order list.
  //    */
  //   nextItem: number;
  //   /**
  //    * A index for a previous item in rendered list.
  //    */
  //   prevItem: number;
  //   /**
  //    * Length to the total for the carousel items.
  //    */
  //   size: number;
  // };
  /**
   * Property to contain a control methods.
   */
  // triggers: {
  //   /**
  //    * Function to move for the next item to the list.
  //    */
  //   goToNextItem: () => void;
  //   /**
  //    * Function to move for the previous item to the list.
  //    */
  //   goToPrevItem: () => void;
  //   /**
  //    * Function to move for a specific item to the list.
  //    */
  //   goToIndex: (index: number) => void;
  // };
}

/**
 * `useCarousel` is a custom hook used to generate a carousel items props and methods to help a render the carousel.
 * @see {@link https://tsdoc.org/pages/tags/see/}
 */
export function useCarousel(options: IUseCarousel): IUseCarouselReturn {
  const containerRef = useRef<HTMLElement>(null);

  const [data, setData] = useState<IReturnItem[]>([]);
  useEffect(() => {
    const containerRefProp = containerRef.current;

    console.log(containerRefProp);
    if (!containerRefProp) {
      return;
    }

    const containerWidth = containerRefProp.clientWidth;

    const newData = options.items.map((item, index) => ({
      id: index,
      ...item,
      getProps: () =>
        ({ style: { width: containerWidth, flexShrink: 0 } } as const),
    }));

    setData(newData);
  }, [options.items]);

  function typedGetProps<TRef extends HTMLElement>() {
    return {
      ref: containerRef as React.RefObject<TRef>,
      style: {
        display: 'flex',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        listStyle: 'none',
      } as const,
    };
  }

  console.log(data);

  return {
    items: data,
    container: { getProps: typedGetProps },
  };
}
