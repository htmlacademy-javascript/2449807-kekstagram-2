// import { DESCRIPTIONS, MESSAGES, NAMES } from './const.js';
// import { getRandomInteger, counter } from './util.js';

// const uniqueIdGenerator = counter();
// const uniqueCommentGenerator = counter();
// // eslint-disable-next-line arrow-body-style
// const getComment = () => {
//   return {
//     id: uniqueCommentGenerator(),
//     avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
//     message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
//     name: NAMES[getRandomInteger(0, NAMES.length - 1)],
//   };
// };

// const getComments = () => {
//   const comments = [];
//   for (let i = 1; i <= getRandomInteger(0, 30); i++) {
//     comments.push(getComment())
//   }
//   return comments;
// };

// function getPhoto() {
//   const id = uniqueIdGenerator();
//   return {
//     id: id,
//     url: `photos/${id}.jpg`,
//     description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
//     likes: getRandomInteger(15, 200),
//     comments: getComments()
//   };
// }


// const getData = () => {
//   const data = [];
//   for (let i = 1; i <= 25; i++) {
//     data.push(getPhoto());
//   }
//   return (data);
// };

// export { getData };
