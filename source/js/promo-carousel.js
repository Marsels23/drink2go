
const promo = document.querySelector('.promo');

const promoButtonPrev = promo.querySelector('.promo__button-prev');

const promoButtonNext = promo.querySelector('.promo__button-next');

const promoList = promo.querySelector('.promo__list');

const promoCount = promo.querySelectorAll('.promo__item').length;

const promoItem = promo.querySelector('.promo__item');

const productWidth = promoItem.clientWidth;


let count = 0;


const setPosition = () => {
  promoList.style.transform = `translateX(${-count*productWidth}px)`;
}

const prevPromoSlide = (evt) => {
  evt.preventDefault();
  promoButtonNext.disabled = false;
  count--;
  if (count <= 0) {
    promoButtonPrev.disabled = true;
  }
  setPosition();
}

const nextPromoSlide = (evt) => {
  evt.preventDefault();
  promoButtonPrev.disabled = false;
  count++;
  if (count >= promoCount -1) {
    promoButtonNext.disabled = true;
  }
  setPosition();
}

promoButtonPrev.addEventListener('click', prevPromoSlide);
promoButtonNext.addEventListener('click', nextPromoSlide);


