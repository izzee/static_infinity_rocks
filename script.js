function modal() {
  const modalOpen = document.querySelector('#modal-open');
  const modalClose = document.querySelector('#modal-close');

  modalClose.addEventListener('click', ()=> {
    document.body.classList.remove('modal-open')
  })
  modalOpen.addEventListener('click', ()=> {
    document.body.classList.add('modal-open')
  })
}

function vhVariable() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function setActiveImage(index){
  const carouselImgs = document.querySelectorAll('.work .carousel > img');
  const currentActive = document.querySelector('.work .carousel > img.active');
  currentActive.classList.remove('active')
  carouselImgs[index].classList.add('active');
}

function imgCarousel () {
  const carouselImgs = document.querySelectorAll('.work .carousel > img');
  let leftArrow = document.querySelector('.work .carousel .arrow-left');
  let rightArrow = document.querySelector('.work .carousel .arrow-right');
  let index = 0;
  leftArrow.addEventListener('click', () => {
    if (index > 0){
      index--;
    } else {
      index = carouselImgs.length - 1;
    }
    setActiveImage(index);
  })
  rightArrow.addEventListener('click', () => {
    if (index < carouselImgs.length -1){
      index++;
    } else {
      index = 0;
    }
    setActiveImage(index);
  })
}

document.addEventListener('DOMContentLoaded', ()=> {
  document.body.classList.add('loaded');
  // initPayPalButton();
  modal();
  vhVariable();
  imgCarousel();
  
  window.addEventListener('resize', vhVariable)
})