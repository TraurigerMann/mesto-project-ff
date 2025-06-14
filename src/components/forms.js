
import { closePopup } from "./modal.js";

import {
  titleInput,
  descriptionInput,
  titleElement,
  descriptionElement,
  newPlaceNameInput,
  newLinkInput,
  newCardForm
} from "./constants.js";

import {  
  createNewCard,
} from './card.js';

// Заполнение полей в поп-апе редактирования профиля
function setInitialEditProfileFormValues() {
  titleInput.value = titleElement.textContent;
  descriptionInput.value = descriptionElement.textContent;
}

// Обработчик изменений в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  
  titleElement.textContent = titleInput.value;
  descriptionElement.textContent = descriptionInput.value;
  closePopup(evt.target.closest(".popup_is-opened"));
}

// Обработчик создания новой карточки
function handleNewCardFormSubmit(evt, callbacksObject) {
  evt.preventDefault();

  let newCard = {
    name: newPlaceNameInput.value,
    link: newLinkInput.value
  }

  createNewCard(newCard, callbacksObject);
  closePopup(newCardForm);
}

export { 
  setInitialEditProfileFormValues,
  handleFormSubmit,
  handleNewCardFormSubmit
}