const swiper = new Swiper('.rounded-border-box', {
  // Optional parameters
  direction: 'horizontal', // or 'vertical'
  loop: true, // Loop slides
  autoplay: {
    delay: 3 * 60 * 1000, // 3 minutes in milliseconds
    disableOnInteraction: false,
  },
});
const swiperBullet = new Swiper('.steps_slider', {
  autoplay: {
    delay: 3 * 60 * 1000, // 3 minutes in milliseconds
    disableOnInteraction: false,
  },
});
var fourProblems = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button-container');

menuBtn.addEventListener('click', () => {
  menu.classList.remove('close');
  menu.classList.add('open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('open');
  menu.classList.add('close');
});
