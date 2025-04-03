const trial = document.querySelector('.trial');
const trialForm = trial.querySelector('.trial__form');
const trialFields = trialForm.querySelectorAll('.trial__item');

const ERROR_TEXT = {
  'empty': 'Это обязательное поле',
  'name': 'Разрешены только буквы и пробелы',
  'phone': 'Разрешены только цифры',
};

const FIELD__STANDARD = {
  'name': /^[a-zа-яё\s]+$/i,
  'phone': /^\d+$/,
};

const validateName = () => {
  let IsValid = true;

  trialFields.forEach((field) => {
    const input = field.querySelector('input');
    const error = field.querySelector('.trial__error');

    if (input.value === '') {
      error.textContent = ERROR_TEXT.empty;
      input.classList.add('input-text__input--error');
      IsValid = false;
    } else if (!FIELD__STANDARD[input.id].test(input.value)) {
      error.textContent = ERROR_TEXT[input.id];
      input.classList.add('input-text__input--error');
      IsValid = false;
    }
  });

  if (IsValid) {
    trialForm.submit();
  }
};

trialForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateName();
});

trialFields.forEach((field) => {
  const input = field.querySelector('input');
  const error = field.querySelector('.trial__error');

  input.addEventListener('focus', () => {
    error.textContent = '';
    input.classList.remove('input-text__input--error');
  });
});

