let dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', (e) => {
    let activeItem = document.querySelector('.navigation__link-active');
    addActiveItem(activeItem, e.target, 'navigation__link', 'navigation__link-active');
})

let featuredFilters = document.querySelectorAll('.featured-house__filters__item');
featuredFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        console.log(e.target);
        let el;
        if (e.target.tagName === 'path') {
            el = e.target.parentNode.parentNode;
        } else if (e.target.tagName === 'svg') {
            el = e.target.parentNode;
        } else {
            el = e.target;
        }
        console.log(el);
        let activeItem = document.querySelector('.featured-house__filters__item-active');
        addActiveItem(activeItem, el, 'featured-house__filters__item', 'featured-house__filters__item-active')
    })
})

let footerFilters = document.querySelectorAll('.footer-navigation__link');
footerFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        let activeItem = document.querySelector('.featured-house__filters__item-active');
        let featuredFiltersArray = document.querySelectorAll('.featured-house__filters__item');
        let elem;

        featuredFiltersArray.forEach(item => {
            if (item.innerText === e.target.innerText) {
                elem = item;
            }
        })
        addActiveItem(activeItem, elem, 'featured-house__filters__item', 'featured-house__filters__item-active')
    })
})

function addActiveItem(activeItem, item, containsClass, addClass) {
    if (activeItem) {
        activeItem.classList.remove(addClass);
    }
    if (item.classList.contains(containsClass)) {
        item.classList.add(addClass);
    }
}