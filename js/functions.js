const checkLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

checkLength();

// Проверка палиндром
// eslint-disable-next-line no-unused-vars
const checkPalindrome = (string) => {

  string = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return string === reversed;
};

checkPalindrome();

// eslint-disable-next-line no-unused-vars
const checkNumber = (string) => {
  let result = '';
  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};

checkNumber();
//
