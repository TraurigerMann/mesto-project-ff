// Показать ошибку ввода
const showInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

// Скрыть ошибку ввода
const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = "";
  }
};

// Проверка валидности поля
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.error);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

// Проверить, есть ли хотя бы одно невалидное поле
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Изменить состояние кнопки
const toggleButtonState = (inputList, validationConfig, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

// Установить обработчики событий
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, validationConfig, buttonElement);
    });
  });
};

// Включить валидацию
const enableValidation = (validationConfig) => {
  const formElementList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formElementList.forEach((formElement) => {
    setEventListeners(formElement, validationConfig);
  });
};

// Очистить валидацию
function clearValidation(formElement, validationConfig) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElementReturn = formElement.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((inputElement) =>
    hideInputError(formElement, inputElement, validationConfig)
  );
  toggleButtonState(inputList, validationConfig, buttonElementReturn);
}

export { enableValidation, clearValidation };