// plugins/flowbite.client.ts
import { defineNuxtPlugin } from '#app';
import { Carousel } from 'flowbite';
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
  InstanceOptions
} from 'flowbite';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const carouselElement = document.getElementById('default-carousel');
    if (carouselElement) {
      const carouselItems: CarouselItem[] = Array.from(carouselElement.querySelectorAll('[data-carousel-item]')).map((item, index) => ({
        position: index,
        el: item as HTMLElement
      }));

      const options: CarouselOptions = {
        defaultPosition: 0,
        interval: 5000, // Set the interval duration to 5000 milliseconds (5 seconds)
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: Array.from(carouselElement.querySelectorAll('[data-carousel-slide-to]')).map((indicator, index) => ({
            position: index,
            el: indicator as HTMLElement
          }))
        },
        onNext: () => console.log('Next slide shown'),
        onPrev: () => console.log('Previous slide shown'),
        onChange: () => console.log('Slide changed')
      };

      const instanceOptions: InstanceOptions = {
        id: 'default-carousel',
        override: true
      };

      const carousel: CarouselInterface = new Carousel(carouselElement as HTMLElement, carouselItems, options, instanceOptions);

      carousel.cycle(); // Start the cycling

      const $prevButton = carouselElement.querySelector('[data-carousel-prev]');
      const $nextButton = carouselElement.querySelector('[data-carousel-next]');

      if ($prevButton) {
        $prevButton.addEventListener('click', () => {
          carousel.prev();
        });
      }

      if ($nextButton) {
        $nextButton.addEventListener('click', () => {
          carousel.next();
        });
      }
    }
  });
});
