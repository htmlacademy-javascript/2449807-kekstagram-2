import { isValid, resetValidation } from './validation.js';

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
