const modalTag = document.querySelector('.big-picture');
const closeButtonTag = document.querySelector('#picture-cancel');
const imageTag = document.querySelector('.big-picture__preview img');

const render = (photo) => {
  imageTag.src = photo.url;
};

const openModal = (item) => {
  modalTag.classList.remove('hidden');
  render(item);
};

const closeModal = (evt) => {
  evt.preventDefault();
  modalTag.classList.add('hidden');
};

closeButtonTag.addEventListener('click', closeModal);

export { openModal };
