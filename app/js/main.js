$(function () {

  $('.discount__inner').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"> <svg class="discount__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-arrow"> </use>  </svg><span class="sr-only"> Предыдущий слайд </span></button> ',
    nextArrow: '<button type="button" class="slick-next">  <svg class="discount__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-arrow"> </use></svg><span class="sr-only"> Следующий слайд </span></button> ',

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

  $('.product__slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"> <svg class="product__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-arrow"> </use>  </svg><span class="sr-only"> Предыдущий слайд </span></button> ',
    nextArrow: '<button type="button" class="slick-next">  <svg class="product__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-arrow"> </use></svg><span class="sr-only"> Следующий слайд </span></button> ',

    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        dots: true,
      }
    }, ]
  });

});

$(function () {

  $('.offers__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"> <svg class="offers__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-arrow"> </use>  </svg><span class="sr-only"> Предыдущий слайд </span></button> ',
    nextArrow: '<button type="button" class="slick-next">  <svg class="offers__arrow" width="80" height="34"> <use xlink: href="images/sprite.svg#icon-arrow"> </use></svg><span class="sr-only"> Следующий слайд </span></button> ',

    responsive: [{
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    $('body').toggleClass('overlay')
  });

  $('.user-nav__item--search').on('click', function () {
    $('.form').toggleClass('form--active')
  })

  $('.catalog-content__fil, .filter__close').on('click', function () {
    $('.filter').toggleClass('filter--active')
    $('body').toggleClass('lock')
    $('body').toggleClass('overlay')
  });

  $('.menu-btn, .header-menu__close').on('click', function () {
    $('.header-menu').toggleClass('header-menu--active')
    $('body').toggleClass('lock')
    $('body').toggleClass('overlay')
  });

  $('.catalog__button--menu').on('click', function () {
    $('.catalog--menu').toggleClass('catalog--active')
    $('.catalog').toggleClass('active')
  })

  $('.pagination__prev').on('click', function () {
    $('.pagination__prev').toggleClass('pagination__prev--disabled')
  })

  $('.rating__star').rateYo({
    maxValue: 1,
    numStars: 1,
    starWidth: "16px",
    rating: "100%",
  });

  $('.rating__product').rateYo({
    maxValue: 5,
    numStars: 5,
    starWidth: "16px",
    rating: "80%",
  });

  $('.rating__product-info').rateYo({
    maxValue: 5,
    numStars: 5,
    starWidth: "16px",
    rating: "0",
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "₽",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.catalog-content__btn').on('click', function () {
    $('.catalog-content__btn').removeClass('catalog-content__btn--active')
    $(this).addClass('catalog-content__btn--active')
  });

  $('.pagination__item').on('click', function () {
    $('.pagination__item').removeClass('pagination__item--active')
    $(this).addClass('pagination__item--active')
  });

  $('.button-list').on('click', function () {
    $('.card').addClass('card--list')
    $('.catalog-content__products').addClass('catalog-content__products--list')
  })

  $('.button-grid').on('click', function () {
    $('.card').removeClass('card--list')
    $('.catalog-content__products').removeClass('catalog-content__products--list')
  })

  $('.catalog-content__filter-select').styler();

  $('.product-info__link').on('click', function (e) {
    e.preventDefault();
    $('.product-info__link').removeClass('product-info__link--active')
    $(this).addClass('product-info__link--active')

    $('.product-info__tab').removeClass('product-info__tab--active')
    $($(this).attr('href')).addClass('product-info__tab--active')
  })

  $('.filter-category__top').on('click', function () {
    $('.filter-category').toggleClass('filter-category--active')
  })
  $('.filter-brand__top').on('click', function () {
    $('.filter-brand').toggleClass('filter-brand--active')
  })
  $('.filter-price__top').on('click', function () {
    $('.filter-price').toggleClass('filter-price--active')
  })
  $('.filter-offers__top').on('click', function () {
    $('.filter-offers').toggleClass('filter-offers--active')
  })
})

var $range = $(".filter-price__input");
var $inputFrom = $(".filter-price__from");
var $inputTo = $(".filter-price__to");
var instance;
var min = 0;
var max = 1000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});


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


if (containerEl1 && containerEl2) {
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
}