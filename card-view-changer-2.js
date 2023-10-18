let catalogView = document.querySelector('.catalog-view-switcher');
let searchResults = document.querySelector('.search-results-card');
let hotelCard = document.querySelector('.hotel-card');

let tile = document.querySelector('.catalog-view-tile');
let toTheTile = document.querySelector('.search-results-view-tile');
// let hotelCardTile = document.querySelector('.hotel-card-tile');

let list = document.querySelector('.catalog-view-list');
let toTheList = document.querySelector('.search-results-view-list');
// let hotelCardList = document.querySelector('.hotel-card-list');

let slideshow = document.querySelector('.catalog-view-slideshow');
let toTheSlideshow = document.querySelector('.search-results-view-list-slideshow');
let hotelCardSlideshow = document.querySelector('.hotel-card-slideshow');
// let slideshowActive = document.querySelector('.slideshow-active');


tile.onclick = function () {
  tile.classList.add('active');
  searchResults.classList.add('search-results-view-tile');
  // hotelCard.classList.add('.hotel-card-tile');

  list.classList.remove('active');
  searchResults.classList.remove('search-results-view-list');
  // hotelCard.classList.remove('.hotel-card-list');

  slideshow.classList.remove('active');
  searchResults.classList.remove('search-results-view-slideshow');
  // hotelCard.classList.remove('.hotel-card-slideshow');
};

slideshow.onclick = function () {
  slideshow.classList.add('active');
  searchResults.classList.add('search-results-view-slideshow');
  // hotelCard.classList.add('.hotel-card-slideshow');
  // hotelCard.firstElementChild.add('.slideshow-active');

  tile.classList.remove('active');
  searchResults.classList.remove('search-results-view-tile');
  // hotelCard.classList.remove('.hotel-card-tile');

  list.classList.remove('active');
  searchResults.classList.remove('search-results-view-list');
  // hotelCard.classList.remove('.hotel-card-list');
};

list.onclick = function () {
  list.classList.add('active');
  searchResults.classList.add('search-results-view-list');
  // hotelCard.classList.add('.hotel-card-list');

  tile.classList.remove('active');
  searchResults.classList.remove('search-results-view-tile');
  // hotelCard.classList.remove('.hotel-card-tile');

  slideshow.classList.remove('active');
  searchResults.classList.remove('search-results-view-slideshow');
  // hotelCard.classList.remove('.hotel-card-slideshow');
};
