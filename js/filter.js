import { renderCards } from './render-card.js';
import { FILTERS } from './const';
import { debounce } from './util.js';

const sectionFiltersTag = document.querySelector('.img-filters');
const formFiltersTag = sectionFiltersTag.querySelector('.img-filters__form');



const localData = [];
let currentFilter = FILTERS.DEFAULT;

const filterActions = {
  [FILTERS.DEFAULT]: () => localData,
  [FILTERS.RANDOM]: () => [...localData].sort(() => Math.random() - 0.5).slice(0, 10),
  [FILTERS.DISCUSSED]: () => [...localData].sort((a, b) => b.comments.length - a.comments.length)
};

const activeButton = (button) => {
  formFiltersTag.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

formFiltersTag.addEventListener('click', debounce(({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    currentFilter = button.id;
    renderCards(filterActions[currentFilter]());
  }
}));

formFiltersTag.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    activeButton(button);
  }
});

const init = (photos) => {
  localData.length = 0;
  localData.push(...photos.slice());
  renderCards(localData);
  sectionFiltersTag.classList.remove('img-filters--inactive');
};

export { init };
