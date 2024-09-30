import { getData } from './api.js';
import { showAlert } from './util.js';
import './upload-form.js';
import { init as initFilter } from './filter.js';

getData()
  .then((data) => {
    initFilter(data);
  })
  .catch((message) => {
    showAlert(`Что-то пошло не так... ${message}`);
  });
