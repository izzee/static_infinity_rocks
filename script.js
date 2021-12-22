function initPayPalButton() {
  function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"description":"Infinity Rocks 2022 Calendar","amount":{"currency_code":"USD","value":18.88}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';
          window.setTimeout(() => {
            location.reload();
          }, 1000)

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();
}

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
  document.body.classList.add('loaded');
  initPayPalButton();
  paypalModal();
  vhVariable();
  window.addEventListener('resize', vhVariable)
})