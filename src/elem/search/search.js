import './search.styl';
const searchButton = document.getElementsByClassName('search__button'),
      searchInput = document.getElementsByClassName('search__input');
let checkSearch = 0;
searchButton[0].onclick = function() {
    searchInput[0].style.backgroundColor = '#e75735';
    searchInput[0].classList.add('search__input_error');
    searchInput[0].value = '';
    searchInput[0].placeholder = 'I’ve not found what I’m looking for...';
    checkSearch = 1;
};
searchInput[0].onfocus = function() {
    if (checkSearch === 1) {
        searchInput[0].style.backgroundColor = '#e5e5e5';
        searchInput[0].classList.remove('search__input_error');
        searchInput[0].placeholder = 'Search';
    } else {
        return
    }
};
