import { modalTag } from './upload-form.js';
import { SCALE } from './const.js';
const minusTag = document.querySelector('.scale__control--smaller');
const plusTag = document.querySelector('.scale__control--bigger');
const valueTag = document.querySelector('.scale__control--value');
const imageTag = document.querySelector('.img-upload__preview img');

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
