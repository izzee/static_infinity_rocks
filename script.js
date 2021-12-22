function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
    },
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"USD","value":1}}]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';
        window.setTimeout(() => {
          location.reload();
        }, 1000)
      });
    },
    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
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

function ballLightning() {
  const xRayCats = document.querySelectorAll('.x-ray-cat');
  xRayCats.forEach(cat => {
    cat.addEventListener('mouseover', (event)=> {
      const {x, y, target} = event;
      const ballLightning = target.previousElementSibling;
      // ballLightning.style.left = `${x}px`;
      // ballLightning.style.top = `${y}px`;
      // console.log(ballLightning.style)

      console.log(ballLightning);
    })
  })
}

document.addEventListener('DOMContentLoaded', ()=> {
  initPayPalButton();
  paypalModal();
  vhVariable();
  ballLightning();
  window.addEventListener('resize', vhVariable)
})