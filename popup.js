document.addEventListener("DOMContentLoaded", function() {
  // Счетчик взрослых-детей
  let adultsNumber = document.getElementById('adults');
  let childrenNumber = document.getElementById('children');
  let adultsMinus = document.getElementById('adults-minus');
  let adultsPlus = document.getElementById('adults-plus');
  let childrenMinus = document.getElementById('children-minus');
  let childrenPlus = document.getElementById('children-plus');

  let adultsCount = 2;
  let childrenCount = 2;

  adultsMinus.onclick = function () {
    if (adultsCount > 0) {
    adultsCount--;
    adultsNumber.value = adultsCount;
    }
  };

  adultsPlus.onclick = function () {
    adultsCount++;
    adultsNumber.value = adultsCount;
  };

  childrenMinus.onclick = function () {
    if (childrenCount > 0) {
    childrenCount--;
    childrenNumber.value = childrenCount;
    }
  };

  childrenPlus.onclick = function () {
    childrenCount++;
    childrenNumber.value = childrenCount;
  };



  //Открытие-закрытие формы
  let popupOpens = document.querySelectorAll('.popup-open-button');
  let popupClose = document.querySelector('.popup-close-button');
  let popupWrapper = document.querySelector('.popup-search-wrapper');
  let popupContainer = document.querySelector('.popup-search-container');

  for (let popupOpen of popupOpens) {
    popupOpen.onclick = function () {
      popupWrapper.classList.remove('popup-hidden');
    }

  }

  popupClose.onclick = function () {
    popupWrapper.classList.add('popup-hidden');
  }

  popupWrapper.onclick = function () {
    if (event.target === popupWrapper) {
      popupWrapper.classList.add('popup-hidden');
    }
  }
});
