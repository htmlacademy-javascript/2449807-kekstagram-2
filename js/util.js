const errorBlock = document.querySelector('#data-error').content.querySelector('.data-error');

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const counter = () => {
  let n = 0;
  return () => ++n;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message, time = 5000, color = 'red') => {
  const alertContainer = errorBlock.cloneNode(true);
  alertContainer.querySelector('.data-error__title').textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, time);
};

const debounce = (callback, timeoutDelay = 400) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomInteger, counter, isEscapeKey, showAlert, debounce };
