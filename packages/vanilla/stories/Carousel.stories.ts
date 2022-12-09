import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Carousel',
} as Meta;

interface Item {
  height: string;
  bgColor: string;
  border: string;
}

function createCarouselItem(item: Item) {
  const carouselItem = document.createElement('li');
  carouselItem.className = 'carouselItem';

  const carouselItemChild = document.createElement('div');

  carouselItemChild.style.height = item.height;
  carouselItemChild.style.backgroundColor = item.bgColor;
  carouselItemChild.style.border = item.border;

  carouselItem.appendChild(carouselItemChild);

  return carouselItem;
}

function createCarouselSlider(items: Item[], carouselWidth: string) {
  const carouselSlider = document.createElement('ul');

  carouselSlider.id = 'carouselSlider';
  carouselSlider.style.listStyle = 'none';
  carouselSlider.style.margin = '0px';
  carouselSlider.style.padding = '0px';
  carouselSlider.style.display = 'flex';
  carouselSlider.style.backgroundColor = 'darkgoldenrod';
  carouselSlider.style.transition = 'ease-in-out 0.3s';

  items.forEach((item) => {
    const carouselItem = createCarouselItem(item);

    carouselItem.style.width = carouselWidth;

    carouselSlider.appendChild(carouselItem);
  });

  return carouselSlider;
}

function createCarouselButtons(
  goToPrevSlide: () => void,
  goToNextSlide: () => void
) {
  const prevSlideBtn = document.createElement('button');
  prevSlideBtn.innerText = 'Anterior';

  prevSlideBtn.addEventListener('click', goToPrevSlide);

  const nextSlideBtn = document.createElement('button');
  nextSlideBtn.innerText = 'Próximo';

  nextSlideBtn.addEventListener('click', goToNextSlide);

  return {
    prevSlideBtn,
    nextSlideBtn,
  };
}

const items = [
  {
    height: '120px',
    bgColor: 'red',
    border: '5px solid black',
  },
  {
    height: '120px',
    bgColor: 'green',
    border: '5px solid black',
  },
  {
    height: '120px',
    bgColor: 'blue',
    border: '5px solid black',
  },
  {
    height: '120px',
    bgColor: 'coral',
    border: '5px solid black',
  },
];

export const Default: StoryFn = (): HTMLDivElement => {
  const carousel = document.createElement('div');

  carousel.style.width = '1000px';

  carousel.style.display = 'flex';

  function goToNextSlide() {
    const carouselSlider = document.querySelector('#carouselSlider');

    carouselSlider?.setAttribute('currentSlideIndex', '1');
  }

  function goToPrevSlide() {
    const carouselSlider = document.querySelector('#carouselSlider');

    carouselSlider?.setAttribute('currentSlideIndex', '0');
  }

  const { prevSlideBtn, nextSlideBtn } = createCarouselButtons(
    goToPrevSlide,
    goToNextSlide
  );

  carousel.append(
    prevSlideBtn,
    createCarouselSlider(items, '1000px'),
    nextSlideBtn
  );

  // console.log(carouselItems);

  return carousel;
};
