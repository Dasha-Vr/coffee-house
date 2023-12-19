
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper( '.offers__swiper', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    prevEl: '.offers__btn-prev',
    nextEl: '.offers__btn-next',
  },
  pagination: {
    el: '.offers__pagination',
    type: 'bullets',
    clickable: true
  }
});
