import {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react';

type CarouselProps = PropsWithChildren<object>;

function Carousel({
  children,
  currentSlideIndex,
}: {
  children: ReactElement | ReactElement[];
  currentSlideIndex: number;
}) {
  const ref = useRef<HTMLUListElement>(null);
  // Children.forEach(children, (child) => console.log(child));

  const [carrouselProps, setCarouselProps] = useState<{
    positions: number[];
    childrenWithWidth: ReactElement[];
  }>();
  console.log(ref.current);

  // const carrouselProps = useMemo(() => {
  //   if (ref.current) {
  //     const carouselWidth = ref.current.offsetWidth;

  //     const childrens = Object.values(ref.current.children) as HTMLLIElement[];
  //     const positions = childrens.map((_, index) => carouselWidth * index);

  //     const childrenWithWidth = Children.map(children, (child) =>
  //       cloneElement(child, { style: { width: 500 } })
  //     );

  //     return { positions, childrens, childrenWithWidth };
  //   }
  // }, [ref, children]);

  useEffect(() => {
    if (ref.current) {
      const carouselWidth = ref.current.parentElement?.offsetWidth ?? 0;

      const childrens = Object.values(ref.current.children) as HTMLLIElement[];
      const positions = childrens.map((_, index) => -(carouselWidth * index));

      const childrenWithWidth = Children.map(children, (child) =>
        cloneElement(child, {
          style: {
            minWidth: ref.current?.parentElement?.offsetWidth,
          },
        })
      );

      setCarouselProps({ positions, childrenWithWidth });
    }
  }, [ref, children]);

  console.log(carrouselProps?.childrenWithWidth);

  return (
    <ul
      ref={ref}
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        backgroundColor: 'darkgoldenrod',
        transition: 'ease-in-out 0.3s',
        transform: `translateX(${
          carrouselProps ? carrouselProps.positions[currentSlideIndex] : 0
        }px)`,
      }}
    >
      {/* {carrouselProps.childrenWithWidth.map((child) => child)} */}
      {carrouselProps?.childrenWithWidth}
    </ul>
  );
}

export default Carousel;
