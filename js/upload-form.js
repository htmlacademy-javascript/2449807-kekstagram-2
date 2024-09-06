import { isValid, resetValidation } from './validation.js';
import { scaleReset } from './scale.js';
const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('#upload-cancel');
const formTag = document.querySelector('#upload-select-image');


const openModal = () => {
  modalTag.classList.remove('hidden');
};

const closeModal = () => {
  modalTag.classList.add('hidden');
  formTag.reset();
  resetValidation();
  scaleReset();
};

uploadFileTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

export { modalTag };
