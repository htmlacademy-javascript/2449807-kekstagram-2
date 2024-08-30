import {MAX_SYMBOL} from './const.js';

const formTag = document.querySelector('#upload-select-image');
const textDescriptionTag = document.querySelector('.text__description');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const checkDescription = (value) => value.length <= MAX_SYMBOL;


pristine.addValidator(
  textDescriptionTag,
  checkDescription,
  `Длина описания не должна превышать ${MAX_SYMBOL} символов`
);

export const isValid = () => pristine.validate();
