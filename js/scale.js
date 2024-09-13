import { SCALE } from './const.js';

const modalTag = document.querySelector('.img-upload__overlay');
const minusTag = modalTag.querySelector('.scale__control--smaller');
const plusTag = modalTag.querySelector('.scale__control--bigger');
const valueTag = modalTag.querySelector('.scale__control--value');
const imageTag = modalTag.querySelector('.img-upload__preview img');

let currentScale = SCALE.DEFAULT;

const render = () => {
  valueTag.value = `${currentScale}%`;
  imageTag.style.transform = `scale(${currentScale / 100})`;
};

minusTag.addEventListener('click', () => {
  currentScale = currentScale - SCALE.SCALE_STEP >= SCALE.MIN ? currentScale - SCALE.SCALE_STEP : SCALE.MIN;
  minusTag.disabled = currentScale === SCALE.MIN;
  plusTag.disabled = false;
  render();
});
plusTag.addEventListener('click', () => {
  currentScale = currentScale + SCALE.SCALE_STEP <= SCALE.MAX ? currentScale + SCALE.SCALE_STEP : SCALE.MAX;
  plusTag.disabled = currentScale === SCALE.MAX;
  minusTag.disabled = false;
  render();
});

const scaleReset = () => {
  currentScale = SCALE.DEFAULT;
  plusTag.disabled = true;
  render();
};

scaleReset();
export { scaleReset };
