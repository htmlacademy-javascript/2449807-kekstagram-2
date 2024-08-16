const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const cardContainer = document.querySelector('.pictures');


const clearCard = () => {
  document.querySelectorAll('.picture').forEach((item) => { item.remove() });
};

const renderCard = (data) => {
  clearCard();
  const fragment = document.createDocumentFragment();
  data.forEach(({ url, comments, likes }) => {
    const card = pictureTemplate.cloneNode(true);
    card.querySelector('.picture__img').src = url;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;
    fragment.append(card);
  });
  cardContainer.append(fragment);
  return data;
};

export { renderCard };
