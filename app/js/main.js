$(function () {

  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"> <svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M0.384645 17.0149L16.3979 31.6079C16.9234 32.1307 17.7756 32.1307 18.3011 31.6079C18.8266 31.0851 18.8266 30.2369 18.3011 29.7141L3.25334 16L18.2998 2.2859C18.8252 1.76309 18.8252 0.914839 18.2998 0.392073C17.7743 -0.130695 16.9221 -0.130695 16.3966 0.392072L0.38331 14.9851C0.103241 15.2638 -0.0168347 15.6332 0.00187251 15.9986C-0.0155416 16.3654 0.104495 16.7348 0.384645 17.0149Z" fill = "#505050"/></svg></button >',
    nextArrow: '<button type="button" class="slick-next"> <svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M18.3105 14.9851L2.29726 0.392105C1.77179 -0.130702 0.919579 -0.130702 0.394105 0.392105C-0.131368 0.914872 -0.131368 1.76312 0.394105 2.28593L15.4419 16L0.395438 29.7141C-0.130036 30.2369 -0.130036 31.0852 0.395438 31.6079C0.920912 32.1307 1.77312 32.1307 2.29855 31.6079L18.3119 17.0149C18.592 16.7362 18.712 16.3668 18.6933 16.0014C18.7107 15.6346 18.5907 15.2652 18.3105 14.9851Z" fill = "#505050"/></svg></button >',
  });

  $('.user-nav__link--cart, .cart__button').on('click', function () {
    $('.cart').toggleClass('cart--active')
    $('body').toggleClass('lock')
    $('body').toggleClass('overlay')
  });

  $(".rating__star").rateYo({
    maxValue: 1,
    numStars: 1,
    starWidth: "16px",
    rating: "100%",
  });


});


function show(anything) {
  document.querySelector('.catalog__input').value = anything;
}


let catalog = document.querySelector('.catalog');
catalog.onclick = function () {
  catalog.classList.toggle('active');
}
const totalPriceEl = document.querySelector('.cart__number');

function calcCartPrice() {
  const cartWrapper = document.querySelector('.cart__wrapper');
  const priceElements = cartWrapper.querySelectorAll('.card__price');
  // const totalPriceEl = document.querySelector('.cart__number');
  let priceTotal = 0;

  priceElements.forEach(function (item) {
    const amountEl = item.closest('.cart__item').querySelector('[data-counter]');
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });
  totalPriceEl.innerText = priceTotal;
  return totalPriceEl;
}




window.addEventListener('click', function (event) {
  let counter;
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter');
    counter = counterWrapper.querySelector('[data-counter]');
  }

  if (event.target.dataset.action === 'plus') {
    if (parseInt(counter.innerText) < 99) {
      counter.innerText = ++counter.innerText;

    }
    calcCartPrice();
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart__wrapper') && parseInt(counter.innerText) === 1) {
      event.target.closest('.cart__item').remove();
      calcCartPrice();
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart__wrapper')) {
      calcCartPrice();
    }

  }

})

const cartWrapper = document.querySelector('.cart__wrapper');
window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.card');

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.card__img').getAttribute('src'),
      title: card.querySelector('.card__name').textContent,
      price: card.querySelector('.price').textContent,
      counter: card.querySelector('[data-counter]').textContent,
    };

    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.textContent = parseInt(counterElement.textContent) + parseInt(productInfo.counter);
    } else {
      const cartItemHTML = `<div class="cart__item" data-id="${productInfo.id}">
                      <div class="cart__close" data-action="close"></div>
                      <div class="cart__box" >
                      <img class="cart__img" src="${productInfo.imgSrc}" width ="70" height ="60">
                      <div class="cart__descr" >
                      <div class="cart__name"> ${productInfo.title} </div><div class = "cart__price card__price" > ${productInfo.price}</div> </div> 
                      </div>
                      <div class="cart__details">
                      <div class="cart__counter counter">
                      <div class="counter__control" data-action="minus">-</div>
                      <div class="counter__current" data-counter >${productInfo.counter}</div> 
                      <div class="counter__control counter__control--plus" data-action="plus">+</div></div> 
                      <div class="cart__num">${productInfo.price}</div></div>
                      </div>`;
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }

    card.querySelector('[data-counter]').textContent = '1';
    calcCartPrice();


    const close = document.querySelectorAll('.cart__close')
    for (i =0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        this.parentNode.remove()
        
      })
    }

    const item = document.querySelectorAll('.cart__item')
    const deleteButton = document.querySelector('.cart__delete')
    deleteButton.addEventListener('click', function () {
      for (i = 0; i < item.length; i++) {
        item[i].remove()
        totalPriceEl.innerHTML = 0;
      }
    })
  }
})




var mixer = mixitup('.products__items');
// var mixer = mixitup('.promotions__products');