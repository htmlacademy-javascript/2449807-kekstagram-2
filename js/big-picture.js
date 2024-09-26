import { COMMENTS_STEP } from './const.js';
import { setEscControl, removeEscControl } from './esc-control.js';

const modalTag = document.querySelector('.big-picture');
const closeButtonTag = modalTag.querySelector('#picture-cancel');
const imageTag = modalTag.querySelector('.big-picture__preview img');
const descriptionTag = modalTag.querySelector('.social__caption');
const commentTemplate = modalTag.querySelector('.social__comment');
const commentsListTag = modalTag.querySelector('.social__comments');
const commentsStatTag = modalTag.querySelector('.social__comment-shown-count');
const commentsTotalTag = modalTag.querySelector('.social__comment-total-count');
const commentsLoaderButtonTag = modalTag.querySelector('.comments-loader');
const statLikesTag = modalTag.querySelector('.likes-count');
const bodyTag = document.querySelector('body');


const localComments = [];
let totalComments = 0;
let shownComments = 0;

const renderLoader = () => {
  if (localComments.length > 0) {
    commentsLoaderButtonTag.classList.remove('hidden');
  } else {
    commentsLoaderButtonTag.classList.add('hidden');
  }
};

const renderStatistic = () => {
  commentsTotalTag.textContent = totalComments;
  commentsStatTag.textContent = shownComments;
};

const createComment = ({ avatar, message, name }) => {
  const newComment = commentTemplate.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  shownComments++;
  return newComment;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach((comment) => {
    fragment.append(createComment(comment));
  });
  commentsListTag.append(fragment);
  renderStatistic();
  renderLoader();
};

const render = ({ url, description, comments, likes }) => {
  imageTag.src = url;
  statLikesTag.textContent = likes;
  descriptionTag.textContent = description;
  localComments.length = 0;
  localComments.push(...comments.slice());
  commentsListTag.innerHTML = '';
  totalComments = comments.length;
  shownComments = 0;
  renderComments();
};

const openModal = (item) => {
  modalTag.classList.remove('hidden');
  render(item);
  bodyTag.classList.add('modal-open');
  setEscControl(closeModal);
};


function closeModal() {
  modalTag.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
}

closeButtonTag.addEventListener('click', () => {
  closeModal();
  removeEscControl();
}
);

commentsLoaderButtonTag.addEventListener('click', () => {
  renderComments();
});

export { openModal, closeModal };
