let catalogView = document.querySelector('.catalog-view-switcher');
let tile = document.querySelector('.catalog-view-tile');
let list = document.querySelector('.catalog-view-list');
let slideshow = document.querySelector('.catalog-view-slideshow');
let searchResults = document.querySelector('.search-results-card');
let toTheTile = document.querySelector('.search-results-view-tile');
let toTheList = document.querySelector('.search-results-view-list');
let toTheSlideshow = document.querySelector('.search-results-view-list-slideshow');
let hotelCard = document.querySelector('.hotel-card');
let hotelCardTile = document.querySelector('.hotel-card-tile');
let hotelCardList = document.querySelector('.hotel-card-list');
let hotelCard-Slideshow = document.querySelector('.hotel-card-slideshow');
let slideshowActive = document.querySelector('.slideshow-active');


tile.onclick = function () {
  tile.classList.add('active');
  searchResults.classList.add('search-results-view-tile');
  list.classList.remove('active');
  searchResults.classList.remove('search-results-view-list');
  slideshow.classList.remove('active');
  searchResults.classList.remove('search-results-view-slideshow');
};

list.onclick = function () {
  tile.classList.remove('active');
  searchResults.classList.remove('search-results-view-tile');
  list.classList.add('active');
  searchResults.classList.add('search-results-view-list')
  slideshow.classList.remove('active');
  searchResults.classList.remove('search-results-view-slideshow');
};

slideshow.onclick = function () {
  tile.classList.remove('active');
  searchResults.classList.remove('search-results-view-tile');
  list.classList.remove('active');
  searchResults.classList.remove('search-results-view-list')
  slideshow.classList.add('active');
  searchResults.classList.add('search-results-view-slideshow');
};






// catalogView.onclick = function () {
//   tile.classList.toggle('active');
//   list.classList.toggle('active');

//   if (tile.classList.contains('active')) {
//       searchResults.classList.add('search-results-view-tile')
//       searchResults.classList.remove('search-results-view-list')
//   } else {
//       searchResults.classList.remove('search-results-view-tile')
//       searchResults.classList.add('search-results-view-list')
//   }
// }
