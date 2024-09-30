const COMMENTS_STEP = 5;

const MAX_SYMBOL = 140;

const MAX_HASHTAGS = 5;

const SPACE = /\s+/g;

const SCALE = {
  DEFAULT: 100,
  MIN: 25,
  MAX: 100,
  SCALE_STEP: 25
};

const EFFECTS = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const EFFECTSSETTING = {
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};

const GET_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

const POST_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export {
  COMMENTS_STEP,
  MAX_SYMBOL,
  MAX_HASHTAGS,
  SPACE,
  SCALE,
  EFFECTS,
  EFFECTSSETTING,
  GET_URL,
  POST_URL,
  FILTERS
};
