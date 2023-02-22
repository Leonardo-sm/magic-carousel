import { useCarousel } from '../src/useCarousel';
import { useRef } from 'react';

export default {
  title: 'Carousel',
  parameters: {},
};

const items = [
  {
    child: () => {
      return <img src="https://picsum.photos/200/300" alt="" />;
    },
  },
  {
    child: () => {
      return <img src="https://picsum.photos/200/300" alt="" />;
    },
  },
  {
    child: () => {
      return <img src="https://picsum.photos/200/300" alt="" />;
    },
  },
];

function Screen() {
  const carousel = useCarousel({
    items,
  });

  const ref = useRef<HTMLUListElement>(null);

  return (
    <div>
      <ul {...carousel.container.getProps()}>
        {carousel.items.map((item) => (
          <li key={item.id} {...item.getProps()}>
            {item.child()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const Default = () => {
  return (
    <div>
      <h1>Simple Carousel</h1>
      <Screen />
    </div>
  );
};
