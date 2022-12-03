import { PropsWithChildren } from 'react';

type CarouselItemProps = PropsWithChildren<object>;

function CarouselItem({ children, ...props }: CarouselItemProps) {
  return <li {...props}>{children}</li>;
}

export default CarouselItem;
