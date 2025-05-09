import { isBackspaceKey } from './../utils/utils.js';
import {
  ERROR_TEXT,
  FIELD__STANDARD
} from './constants.js';

const trial = document.querySelector('.trial');
const trialForm = trial.querySelector('.trial__form');
const trialFields = trialForm.querySelectorAll('.trial__item');

const setFormValidate = () => {
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
};

const formatPhone = () => {
  const phoneInput = trialForm.querySelector('#phone');

  phoneInput.addEventListener('input', () => {
    let input = phoneInput.value.replace(/\D/g, '');
    let formattedValue = '';

    if (input.length > 0) {
      formattedValue = '+7';

      if (input.length > 1) {
        formattedValue += ` (${input.substring(1, 4)}`;
      }

      if (input.length >= 4) {
        formattedValue += `)-${input.substring(4, 7)}`;
      }

      if (input.length >= 7) {
        formattedValue += `-${input.substring(7, 9)}`;
      }

      if (input.length >= 9) {
        formattedValue += `-${input.substring(9, 11)}`;
      }

      if (input.length > 11) {
        input = input.substring(0, 11);
        formattedValue = `+7 (${input.substring(1, 4)})-${input.substring(4, 7)}-${input.substring(7, 9)}-${input.substring(9, 11)}`;
      }
    }

    phoneInput.value = formattedValue;
  });

  phoneInput.addEventListener('keydown', (evt) => {
    if (isBackspaceKey(evt)) {
      const value = phoneInput.value;
      const selectionStart = phoneInput.selectionStart;

      if (selectionStart > 0) {
        const charBeforeCursor = value[selectionStart - 1];

        if (['-', '(', ')', ' '].includes(charBeforeCursor)) {
          phoneInput.value = value.substring(0, selectionStart - 1) + value.substring(selectionStart);
          evt.preventDefault();
          phoneInput.selectionStart = selectionStart - 1;
          phoneInput.selectionEnd = selectionStart - 1;
        }
      }
    }
  });
};

const formatName = () => {
  const nameInput = trialForm.querySelector('#name');

  nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });
};

export { setFormValidate, formatName, formatPhone };
