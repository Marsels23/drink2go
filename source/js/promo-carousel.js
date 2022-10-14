/* Секция с нужными элементами, чтобы быстрее искать */
const promo = document.querySelector('.promo');
/* Кнопка прокрутки карусели товаров - назад */
const promoButtonPrev = promo.querySelector('.promo__button-prev');
/* Кнопка прокрутки карусели товаров - вперед */
const promoButtonNext = promo.querySelector('.promo__button-next');
/* Список товаров */
const promoList = promo.querySelector('.promo__list');
/* Общее количество товаров */
const promoCount = promo.querySelectorAll('.promo__item').length;
/* Одна карточка */
const promoItem = promo.querySelector('.promo__item');
/* Ширина одной карточки товара */
const productWidth = promoItem.clientWidth;


let count = 0;

/* Измерям на сколько px нужно пролистывать */
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


