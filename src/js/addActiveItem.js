let dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', (e) => {
    let activeItem = document.querySelector('.navigation__link-active');
    addActiveItem(activeItem, e.target, 'navigation__link', 'navigation__link-active');
})

let featuredFilters = document.querySelector('.featured-house__filters');
featuredFilters.addEventListener('click', (e) => {
    let activeItem = document.querySelector('.featured-house__filters__item-active');
    addActiveItem(activeItem, e.target, 'featured-house__filters__item', 'featured-house__filters__item-active')
})

function addActiveItem(activeItem, item, containsClass, addClass) {
    if (activeItem) {
        activeItem.classList.remove(addClass);
    }
    if (item.classList.contains(containsClass)) {
        item.classList.add(addClass);
    }
}