import { EFFECTS, EFFECTSSETTING } from './const.js';
const sliderGroupTag = document.querySelector('.effect-level');
const effectsTag = document.querySelector('.effects');
const imageTag = document.querySelector('.img-upload__preview img');
const sliderTag = document.querySelector('.effect-level__slider');
const inputTag = document.querySelector('.effect-level__value');
const defaultTag = document.querySelector('#effect-none');

let currentEffect = EFFECTS.DEFAULT;

const isDefaultEffect = () => currentEffect === EFFECTS.DEFAULT;

noUiSlider.create(sliderTag, {
  range: {
    min: 0,
    max: 100,
  },
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

const renderImage = () => {
  if (isDefaultEffect()) {
    imageTag.style.filter = '';
    imageTag.classList = '';
  } else {
    const { style, units } = EFFECTSSETTING[currentEffect];
    imageTag.style.filter = `${style}(${inputTag.value}${units})`;
    imageTag.classList.add(`effects__preview--${currentEffect}`);
  }
};

const updateSlider = () => {
  const { min, max, step } = EFFECTSSETTING[currentEffect];
  sliderTag.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    step,
    start: max
  });
};

const hideSlider = () => {
  sliderGroupTag.classList.add('hidden');
};

const showSlider = () => {
  sliderGroupTag.classList.remove('hidden');
};

effectsTag.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if (isDefaultEffect()) {
    hideSlider();
    renderImage();
  } else {
    showSlider();
    updateSlider();
    renderImage();
  }
});

sliderTag.noUiSlider.on('update', () => {
  inputTag.value = sliderTag.noUiSlider.get();
  renderImage();
});

export const reset = () => {
  currentEffect = EFFECTS.DEFAULT;
  hideSlider();
  renderImage();
  // defaultTag.checked = true;
};

reset();
