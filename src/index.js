import './pages/index.css';
import { initialCards } from './components/cards.js';

import {  
  createCard,
  handleDelete,
  handleLike
} from './components/card.js';

import {
  popupsArray,
  editForm,
  newCardForm,
  profileEditButton,
  profileAddButton,
  newPlaceFormElement,
} from "./components/constants.js";

import {
  handleOverlayClick,
  openPopup,
  handleCloseButtonClick,
  openImagePopup
} from "./components/modal.js";

import { 
  setInitialEditProfileFormValues,
  handleFormSubmit,
  handleNewCardFormSubmit
} from './components/forms.js'


const callbacksObject = {
  deleteCardCallback: handleDelete,
  openImageCallback: openImagePopup,
  handleLikesCallback: handleLike
};

// Начальная отрисовка карточек
initialCards.forEach((card) => {
  createCard(card, callbacksObject);
});

// Слушатель для редактрирования профиля
profileEditButton.addEventListener("click", () => {
  setInitialEditProfileFormValues();
  openPopup(editForm);
});

// Слушатель для добавления карточки
profileAddButton.addEventListener("click", () => {
  openPopup(newCardForm);
});

// Слушатель для закрытия поп-апа
popupsArray.forEach((popup) => { 
  const closeButton = popup.querySelector(".popup__close");
  popup.addEventListener("click", handleOverlayClick);
  closeButton.addEventListener("click", handleCloseButtonClick);
});

// Слушатель для подтверждения изменений в профиле
editForm.addEventListener("submit", handleFormSubmit);

// Слушатель для подтверждения создания карточки
newCardForm.addEventListener("submit", evt => {
  handleNewCardFormSubmit(evt, callbacksObject);
  newPlaceFormElement.reset();
});
