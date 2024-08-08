const DESCRIPTIONS = [
  'Вся красота мира в одной картинке',
  'Моменты, которые запечатлены навсегда',
  'Счастье в каждом кадре',
  'Когда слова не нужны, достаточно фотографии',
  'История, рассказанная через объектив',
  'Остановить время в одном кадре',
  'Фотография — это способ улыбнуться в будущем',
  'Сегодня — самый лучший день',
  'Я не доверяю словам. Я доверяю фотографиям',
  'Фотографии — это свидетельство о том, что мы жили',
  'Момент, когда небо и земля сливаются воедино',
  'В объектив всегда видна правда — это как детектор лжи',
  'Сделано объективом и любовью',
  'Счастье никогда не выходит из моды',
  'Лишь тот, кто странствует, открывает новые пути',
  'Зарядитесь нашим теплом',
  'Жизнь лучше, когда ты смеешься'
];

const MESSAGES = [
  ' Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Михаил',
  'Артём',
  'Александр',
  'Матвей',
  'Максим',
  'Елена',
  'Наталья',
  'Марина',
  'Светлана'
];

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

const uniqueIdGenerator = counter();
const uniqueCommentGenerator = counter();
// eslint-disable-next-line arrow-body-style
const getComment = () => {
  return {
    id: uniqueCommentGenerator(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
};

const getComments = () => {
  const comments = [];
  for (let i = 1; i <= getRandomInteger(0, 30); i++) {
    comments.push(getComment())
  }
  return comments;
};

function getPhoto() {
  const id = uniqueIdGenerator();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: getComments()
  };
}


const getData = () => {
  const data = [];
  for (let i = 1; i <= 25; i++) {
    data.push(getPhoto());
  }
  console.log(data)
};
getData();
getData();
