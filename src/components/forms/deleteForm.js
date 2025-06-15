import { deleteCardApi } from '../api.js';

import { openPopup, closePopup } from '../modal.js';

import { deletePopup } from '../constants.js';

let selectedCard;
let id;

// Функция открытия попапа для подтверждения удаления карточки
const openPopupDelete = (cardElement, cardId) => {
  selectedCard = cardElement;
  id = cardId;
  openPopup(deletePopup);
};

// Функция закрытия попапа подтверждения удаления карточки
const closePopupDelete = () => {
  closePopup(deletePopup);
};

// Функция удаления карточки
function deleteCard(selectedCard, id) {
  deleteCardApi(id)
    .then(() => {
      selectedCard.remove();
      closePopupDelete();
    })
    .catch((err) => {
      console.error("Произошла ошибка при удалении карточки:", err);
    });
}

// Обработчик события отправки формы для удаления карточки
function handleCardDelete(evt) {
  evt.preventDefault();
  deleteCard(selectedCard, id);
}

export {
  openPopupDelete,
  deleteCard,
  handleCardDelete
}