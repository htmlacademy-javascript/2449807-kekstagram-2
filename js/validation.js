import {MAX_SYMBOL, MAX_HASHTAGS, SPACE, HASHTAG_FORMULA} from './const.js';

const formTag = document.querySelector('#upload-select-image');
const textDescriptionTag = document.querySelector('.text__description');
const hashtagTag = formTag.querySelector('.text__hashtags');

const hashtagList = (value) => value.replaceAll(SPACE, ' ').trim().toLowerCase().split(' ');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const checkDescription = (value) => value.length <= MAX_SYMBOL;

const checkHashtags = (value) => !value.length || hashtagList(value).every((item) => HASHTAG_FORMULA.test(item));

const checkHashtagsCount = (value) => hashtagList(value).length <= MAX_HASHTAGS;

const checkUniqueHashtags = (value) => {
  const hashs = hashtagList(value);
  const uniques = [...new Set(hashs)];
  return hashs.length === uniques.length;
};

pristine.addValidator(
  textDescriptionTag,
  checkDescription,
  `Длина описания не должна превышать ${MAX_SYMBOL} символов`
);

pristine.addValidator(
  hashtagTag,
  checkHashtags,
  'Хэштег должен начинаться с #, должен включать только буквы латинского и русского алфавита и не должен быть длиннее 20 символов'
);

pristine.addValidator(
  hashtagTag,
  checkHashtagsCount,
  `Количество хэштегов не должно превышать ${MAX_HASHTAGS}`
);

pristine.addValidator(
  hashtagTag,
  checkUniqueHashtags,
  'Хэштеги не должны повторяться'
);

export const isValid = () => pristine.validate();

export const resetValidation = () => pristine.reset();
