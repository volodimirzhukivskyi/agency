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
var fourProblems = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
// show slider info function
function showSliderInfo(type = 'hide') {
  const slider_text = document.querySelectorAll('.smm-description_info');
  slider_text.forEach((text) => {
    for (let i = 0; i < text.children.length; i++) {
      const text_el = text.children[i];
      if (i !== 0 && type === 'hide') {
        text_el.style.display = 'none';
      } else {
        text_el.style.display = 'block';
      }
    }
  });
}

// listner button
function addButtonSliderListner() {


  const sliderButtons = document.querySelectorAll('.smm-description__button');
  sliderButtons.forEach((button) => {
    button.onclick = () => {
      const dataset = button.dataset.show;
      const buttonSpan = button.querySelector('span');
      if(dataset==='show'){
        button.textContent='згорнути інформацію'

        showSliderInfo('show');
        button.dataset.show='hide'
      }else{
         button.textContent='розгорнути повністю '
         showSliderInfo('hide');
          button.dataset.show='show'
        }
        button.append(buttonSpan)
    };
  });
}
addButtonSliderListner()
