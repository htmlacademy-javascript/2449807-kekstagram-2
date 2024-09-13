import { isValid, resetValidation } from './validation.js';
import { scaleReset } from './scale.js';
import './effects.js';
import { isEscapeKey } from './util.js';

const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('#upload-cancel');
const formTag = document.querySelector('#upload-select-image');
const bodyTag = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalTag.classList.add('hidden');
    closeModal();
  }
};

const openModal = () => {
  modalTag.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  modalTag.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  formTag.reset();
  resetValidation();
  scaleReset();
  document.removeEventListener('keydown', onDocumentKeydown);
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
