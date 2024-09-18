import { isValid, resetValidation } from './validation.js';
import { scaleReset } from './scale.js';
import './effects.js';
import { isEscapeKey } from './util.js';
import { showPopup } from './popups.js';
import { postData } from './api.js';

const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('#upload-cancel');
const formTag = document.querySelector('#upload-select-image');
const bodyTag = document.querySelector('body');
const uploadButtonTag = document.querySelector('#upload-submit');

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

const UploadButtonStatus = {
  DEFAULT: 'Загрузить',
  SENDING: 'Идет загрузка...'
};

const disableButton = (isDisabled = true) => {
  uploadButtonTag.disabled = isDisabled;
  uploadButtonTag.textContent = isDisabled ? UploadButtonStatus.SENDING : UploadButtonStatus.DEFAULT;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    disableButton();
    postData(new FormData(formTag))
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        closeModal();
        showPopup('success');
      })
      .catch(() => {
        showPopup('error');
      })
      .finally(() => {
        disableButton(false);
      });
  }
});
