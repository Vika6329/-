$(function () {

  $('.discount__inner').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"> <svg class="discount__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-prev"> </use> <span class="sr-only"> Предыдущий слайд </span> </svg></button> ',
    nextArrow: '<button type="button" class="slick-next">  <svg class="discount__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-next"> </use> <span class="sr-only"> Следующий слайд </span> </svg></button> ',

    responsive: [{
        breakpoint: 1230,
        settings: {
          autoplay: true,
          arrows: false,
          autoplaySpeed: 3000,
        }
      },

      {
        breakpoint: 561,
        settings: {
          autoplay: false,
          arrows: false,
          dots: true,
        }
      },
    ]

  });

});

$(function () {
  $('.brands__items').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
});

$(function () {
  $('.user-nav__link--cart, .cart__button').on('click', function () {
    $('.cart').toggleClass('cart--active')
    $('body').toggleClass('lock')
  });

  $('.user-nav__item--search').on('click', function () {
    $('.form').toggleClass('form--active')
  })

  $('.menu-btn, .header-menu__close').on('click', function () {
    $('.header-menu').toggleClass('header-menu--active')
    $('body').toggleClass('lock')
    $('body').toggleClass('overlay')
  });

  $('.catalog__button--menu').on('click', function () {
    $('.catalog--menu').toggleClass('catalog--active')
  })

  $(".rating__star").rateYo({
    maxValue: 1,
    numStars: 1,
    starWidth: "16px",
    rating: "100%",
  });
})


function show(anything) {
  document.querySelector('.catalog__button').value = anything;
}

let catalog = document.querySelector('.catalog');
catalog.onclick = function () {
  catalog.classList.toggle('active');
}

$('html').on('click', function (event) {
  if (!$(event.target).closest('.catalog--menu').length) {
    $('.catalog').removeClass('catalog--active');
  }
});


var inp = document.querySelector('.form__input');
window.addEventListener('resize', function () {
  inp.setAttribute('placeholder', this.innerWidth >= 768 ? 'Найти в магазине' : 'Я ищу...');
});
window.dispatchEvent(new Event('resize'));


const totalPriceEl = document.querySelector('.cart__number');

function calcCartPrice() {
  const cartWrapper = document.querySelector('.cart__wrapper');
  const priceElements = cartWrapper.querySelectorAll('.card__price');
  const totalPriceEl = document.querySelector('.cart__number');
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
                      <div class = "cart__close" data - action = "close"><span class="sr-only">Удалить из корзини</span></div>
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
                      </>`;
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }

    card.querySelector('[data-counter]').textContent = '1';
    calcCartPrice();


    const close = document.querySelectorAll('.cart__close')
    for (i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        this.parentNode.remove()
        calcCartPrice()
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

var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);