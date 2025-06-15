import './pages/index.css';
import { initialCards } from './components/cards.js';

import {
  cardsList,
  renderCard,
  handleCardDelete,
  handleCardLike
} from './components/card.js';

import {
  popupsArray,
  editForm,
  newCardForm,
  profileEditButton,
  profileAddButton,
  newPlaceFormElement,
  popupImage,
  popupImageCaption,
  buttonTypeCard,
} from "./components/constants.js";

import {
  handleOverlayClick,
  openPopup,
  handleCloseButtonClick
} from "./components/modal.js";

import { 
  setInitialEditProfileFormValues,
  handleEditProfileFormSubmit,
  handleNewCardFormSubmit
} from './components/forms.js'


const cardsArray = Array.from(document.querySelectorAll('.card'));

// Создание карточек из массива initialCards
function createCard(card, callbacksObject) {
  const newCard = renderCard(card, callbacksObject);
  cardsList.append(newCard);
}

// Создание карточек новых карточек
function createNewCard(card, callbacksObject) {
  const newCard = renderCard(card, callbacksObject);
  cardsList.insertBefore(newCard, cardsList.firstChild); 
}

function openImagePopup(
  cardImg,
  popupImage,
  popupImageCaption,
  buttonTypeCard
) {
  popupImage.src = cardImg.src;
  popupImage.alt = cardImg.alt;
  popupImageCaption.textContent = cardImg.alt;
  openPopup(buttonTypeCard);
}

const callbacksObject = {
  deleteCardCallback: handleCardDelete,
  handleLikesCallback: handleCardLike
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

// Слушатель для поп-апа карточки
cardsArray.forEach((card) => {
  const cardImage = card.querySelector('.card__image');
  cardImage.addEventListener("click", () => {
    openImagePopup(cardImage, popupImage, popupImageCaption, buttonTypeCard);
  });
});

// Слушатель для закрытия поп-апа
popupsArray.forEach((popup) => { 
  const closeButton = popup.querySelector(".popup__close");
  popup.addEventListener("click", handleOverlayClick);
  closeButton.addEventListener("click", handleCloseButtonClick);
});

// Слушатель для подтверждения изменений в профиле
editForm.addEventListener("submit", handleEditProfileFormSubmit);

// Слушатель для подтверждения создания карточки
newCardForm.addEventListener("submit", evt => {
  handleNewCardFormSubmit(evt, callbacksObject);
  newPlaceFormElement.reset();
});

export { createNewCard }