import { useCarousel } from './useCarousel';

export default function Screen() {
  const items = [
    {
      child: () => {
        return <div />;
      },
    },
  ];

  const carousel = useCarousel({
    items,
  });

  return (
    <div>
      <ul>
        {carousel.items.map((item) => (
          <li key={item.id}>{item.child()}</li>
        ))}
      </ul>
    </div>
  );
}
