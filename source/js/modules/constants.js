export const VIDEO__SRC = {
  'about': 'https://www.youtube.com/embed/9TZXsZItgdw?si=If-63jVtnn0Hu5NR',
};

export const VIDEO__TITLES = {
  'about': 'Видео о тренажёрном зале.',
};

export const ALL__PRICES = {
  'one-month': {
    'price-coach': '5000',
    'price-day': '1700',
    'price-full': '2700',
  },
  'six-month': {
    'price-coach': '30000',
    'price-day': '10200',
    'price-full': '16200',
  },
  'twelve-month': {
    'price-coach': '60000',
    'price-day': '20400',
    'price-full': '32400',
  },
};

export const ERROR_TEXT = {
  'empty': 'Это обязательное поле',
  'name': 'Разрешены только буквы и пробелы',
  'phone': 'Введите не менее 11 цифр',
};

export const FIELD__STANDARD = {
  'name': /^[a-zа-яё\s]+$/i, ///^[a-zа-яё\s]*[^0-9][a-zа-яё\s]*$/i
  'phone': /(.*\d.*){11}/,
};
