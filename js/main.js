import { getData } from './data.js';
import { renderCards } from './render-card.js';
import './upload-form.js';

renderCards(getData());
