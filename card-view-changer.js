document.addEventListener("DOMContentLoaded", function() {
  // Изменяет вид карточек
  let catalogView = document.querySelector('.catalog-view-switcher');
  let searchResults = document.querySelector('.search-results-cards');
  let hotelCards = document.querySelectorAll('.hotel-card');

  let tile = document.querySelector('.catalog-view-tile');
  let slideshow = document.querySelector('.catalog-view-slideshow');
  let list = document.querySelector('.catalog-view-list');

  let allCards = document.querySelectorAll('.search-results-view-slideshow .hotel-card-slideshow');

  let slideshowButtons = document.querySelectorAll('.slideshow-button')
  let slideshowNextButton = document.querySelector('.slideshow-next-button');
  let slideshowPreviousButton = document.querySelector('.slideshow-previous-button');

  let slideshowPaginationHidden = document.querySelector('.pagination')

  // плитка
  tile.onclick = function () {
    tile.classList.add('active');
    searchResults.classList.add('search-results-view-tile');

    hotelButtons = document.querySelectorAll('.search-results-view-slideshow .button');

    for (let hotelCard of hotelCards) {
      hotelCard.classList.add('hotel-card-tile');
      hotelCard.classList.remove('hotel-card-slideshow', 'hotel-card-list');
      slideshowPaginationHidden.classList.remove('display-none');


      for (let hotelButton of hotelButtons) {
        hotelButton.removeAttribute('tabindex');
      }
    }

    for (let slideshowButton of slideshowButtons) {
      slideshowButton.classList.add('display-none');
    }

    searchResults.classList.remove('search-results-view-list');
    list.classList.remove('active');

    slideshow.classList.remove('active');
    searchResults.classList.remove('search-results-view-slideshow');


  };

// слайдшоу
  slideshow.onclick = function () {
    slideshow.classList.add('active');
    searchResults.classList.add('search-results-view-slideshow');
    for (let hotelCard of hotelCards) {
      hotelCard.classList.add('hotel-card-slideshow');
      hotelCard.classList.remove('hotel-card-tile', 'hotel-card-list');
      slideshowPaginationHidden.classList.add('display-none');
      for (let slideshowButton of slideshowButtons) {
      slideshowButton.classList.remove('display-none');
      }
    }

    let hotelButtons = document.querySelectorAll('.search-results-view-slideshow .button');
    for (let hotelButton of hotelButtons) {
      hotelButton.setAttribute('tabindex', '-1');
    }

    hotelCards[0].classList.add('slideshow-active-card');
    hotelCards[1].classList.add('slideshow-next-card');
    hotelCards[hotelCards.length - 1].classList.add('slideshow-previous-card');

    hotelButtons[0].setAttribute('tabindex', '0');
    hotelButtons[1].setAttribute('tabindex', '0');

    allCards = document.querySelectorAll('.search-results-view-slideshow .hotel-card-slideshow');

    list.classList.remove('active');
    searchResults.classList.remove('search-results-view-list');

    tile.classList.remove('active');
    searchResults.classList.remove('search-results-view-tile');
  };

  // лист
  list.onclick = function () {
    list.classList.add('active');
    searchResults.classList.add('search-results-view-list');

    hotelButtons = document.querySelectorAll('.search-results-view-slideshow .button');

    for (let hotelCard of hotelCards) {
      hotelCard.classList.add('hotel-card-list');
      hotelCard.classList.remove('hotel-card-tile', 'hotel-card-slideshow');
      slideshowPaginationHidden.classList.remove('display-none');

      for (let hotelButton of hotelButtons) {
        hotelButton.removeAttribute('tabindex');
      }
    }

    for (let slideshowButton of slideshowButtons) {
      slideshowButton.classList.add('display-none');
    }

    slideshow.classList.remove('active');
    searchResults.classList.remove('search-results-view-slideshow');

    tile.classList.remove('active');
    searchResults.classList.remove('search-results-view-tile');
  }


  // КНОПКИ СЛАЙДЕРА
  let activeIndex = 0;

  // кнопка вперед
  slideshowNextButton.onclick = function () {
    // console.log("next button clicked");
    let nextIndex = (activeIndex + 1) % allCards.length;
    let afterIndex = (activeIndex + 2) % allCards.length;
    let previousIndex = (activeIndex - 1 + allCards.length) % allCards.length;

    if (activeIndex >= 0 && activeIndex < allCards.length) {
      allCards[activeIndex].classList.remove('slideshow-active-card');
      allCards[nextIndex].classList.remove('slideshow-next-card');
      allCards[previousIndex].classList.remove('slideshow-previous-card');

      allCards[activeIndex].classList.add('slideshow-previous-card');
      allCards[nextIndex].classList.add('slideshow-active-card');
      allCards[afterIndex].classList.add('slideshow-next-card');

      for (let hotelButton of allCards[activeIndex].querySelectorAll('.button')) {
        hotelButton.setAttribute('tabindex', '-1');
      }

      for (let hotelButton of allCards[nextIndex].querySelectorAll('.button')) {
        hotelButton.setAttribute('tabindex', '0');
      }

      activeIndex = nextIndex;
    }
  };

  // кнопка назад
  slideshowPreviousButton.onclick = function () {
    let nextIndex = (activeIndex + 1) % allCards.length;
    let previousIndex = (activeIndex - 1 + allCards.length) % allCards.length;
    let beforePreviousIndex = (activeIndex - 2 + allCards.length) % allCards.length;

    if (activeIndex >= 0 && activeIndex < allCards.length) {
      allCards[activeIndex].classList.remove('slideshow-active-card');
      allCards[nextIndex].classList.remove('slideshow-next-card');
      allCards[previousIndex].classList.remove('slideshow-previous-card');

      allCards[activeIndex].classList.add('slideshow-next-card');
      allCards[previousIndex].classList.add('slideshow-active-card');
      allCards[beforePreviousIndex].classList.add('slideshow-previous-card');

      for (let hotelButton of allCards[activeIndex].querySelectorAll('.button')) {
        hotelButton.setAttribute('tabindex', '-1');
      }

      for (let hotelButton of allCards[previousIndex].querySelectorAll('.button')) {
        hotelButton.setAttribute('tabindex', '0');
      }

      activeIndex = previousIndex;
    }
  };


  // Счетчик лайков
  let favoriteCounter = document.querySelector('.favorite-counter');
  let favoriteAdds = document.querySelectorAll('.hotel-card .button-secondary');


    for (let favoriteAdd of favoriteAdds) {
      favoriteAdd.onclick = function () {
        let favoriteCounterText = parseInt(favoriteCounter.textContent, 10);

        if (favoriteAdd.classList.contains('favorite-added')) {
          favoriteCounterText--;
          favoriteCounter.textContent = favoriteCounterText.toString();
          favoriteAdd.classList.remove('favorite-added');
          favoriteAdd.textContent = 'В избранное';
        } else {
          favoriteCounterText++;
          favoriteCounter.textContent = favoriteCounterText.toString();
          favoriteAdd.classList.add('favorite-added');
          favoriteAdd.textContent = 'В избранном';
        }
      }
    }

    // Сортировка карточек
    // let selectSortBy = document.querySelector('.sort-by')
    // let hotelPrices = document.querySelectorAll('.hotel-price')

    // selectSortBy.addEventListener('change', function() {
    //   let selectedValue = selectSortBy.value;

    //   if (selectedValue === 'first-cheapest') {
    //     console.log('Cheapest first');

    //   } else if (selectedValue === 'first-expensive') {
    //     console.log('Expensive first');
    //   }
    // });
});
