// function initPayPalButton() {
//   function initPayPalButton() {
//     paypal.Buttons({
//       style: {
//         shape: 'pill',
//         color: 'gold',
//         layout: 'vertical',
//         label: 'paypal',
        
//       },

//       createOrder: function(data, actions) {
//         return actions.order.create({
//           purchase_units: [{"description":"Infinity Rocks 2022 Calendar","amount":{"currency_code":"USD","value":18.88}}]
//         });
//       },

//       onApprove: function(data, actions) {
//         return actions.order.capture().then(function(orderData) {
          
//           // Full available details
//           console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//           // Show a success message within this page, e.g.
//           const element = document.getElementById('paypal-button-container');
//           element.innerHTML = '';
//           element.innerHTML = '<h3>Thank you for your payment!</h3>';
//           window.setTimeout(() => {
//             location.reload();
//           }, 1000)

//           // Or go to another URL:  actions.redirect('thank_you.html');
          
//         });
//       },

//       onError: function(err) {
//         console.log(err);
//       }
//     }).render('#paypal-button-container');
//   }
//   initPayPalButton();
// }

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
  paypalModal();
  vhVariable();
  imgCarousel();
  
  window.addEventListener('resize', vhVariable)
})