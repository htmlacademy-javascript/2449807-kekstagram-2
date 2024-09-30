import { isValid, resetValidation } from './validation.js';
import { scaleReset } from './scale.js';
import './effects.js';
import { setEscControl, removeEscControl } from './esc-control.js';
import { showPopup } from './popups.js';
import { postData } from './api.js';

const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('#upload-cancel');
const formTag = document.querySelector('#upload-select-image');
const bodyTag = document.querySelector('body');
const uploadButtonTag = document.querySelector('#upload-submit');
const textDescriptionTag = document.querySelector('.text__description');
const hashtagTag = formTag.querySelector('.text__hashtags');
const fileTag = document.querySelector('#upload-file');
const imageTag = modalTag.querySelector('.img-upload__preview img');
const previewTags = modalTag.querySelectorAll('.effects__preview');

const canCloseForm = () => !(document.activeElement === textDescriptionTag || document.activeElement === hashtagTag);

const closeModal = () => {
  modalTag.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  formTag.reset();
  resetValidation();
  scaleReset();
};

const openModal = () => {
  modalTag.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  setEscControl(closeModal, canCloseForm);
  const file = fileTag.files[0];
  const url = URL.createObjectURL(file);
  imageTag.src = url;
  previewTags.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
  });
};

uploadFileTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscControl();
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
