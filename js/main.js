import { getData } from './api.js';
import { renderCards } from './render-card.js';
import { showAlert } from './util.js';
import './upload-form.js';

getData()
  .then((data) => {
    renderCards(data);
  })
  .catch((message) => {
    showAlert(`Что-то пошло не так... ${message}`);
  });
