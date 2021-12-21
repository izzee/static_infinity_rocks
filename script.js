function paypalModal() {
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

document.addEventListener('DOMContentLoaded', ()=> {
  paypalModal();
  vhVariable();
  window.addEventListener('resize', vhVariable)
})