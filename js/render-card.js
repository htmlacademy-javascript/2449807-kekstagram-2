import { openModal } from './big-picture.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const cardContainerTag = document.querySelector('.pictures');
const localData = [];

const clearCard = () => {
  document.querySelectorAll('.picture').forEach((item) => { item.remove() });
};

const renderCards = (data) => {
  localData.length = 0;
  localData.push(...data.slice());
  clearCard();
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const { url, comments, likes, id } = item;
    const card = pictureTemplate.cloneNode(true);
    card.querySelector('.picture__img').src = url;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;
    card.dataset.id = id;
    fragment.append(card);
  });
  cardContainerTag.append(fragment);
  return data;
};

cardContainerTag.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photoData = localData.find((photo) => photo.id === id);
    openModal(photoData);
  }
});

export { renderCards };
