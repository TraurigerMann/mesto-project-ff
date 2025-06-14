import {
  popupImage,
  popupImageCaption,
  buttonTypeCard,
} from "../components/constants.js";


const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');

// Отрисовка карточки
function renderCard(cardInfo, callbacksObject) {
  const {
    deleteCardCallback,
    openImageCallback,
    handleLikesCallback
  } = callbacksObject;
  
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name;
  cardTitle.textContent = cardInfo.name;

  cardImage.addEventListener("click", () => {
    openImageCallback(cardImage, popupImage, popupImageCaption, buttonTypeCard);
  });

  deleteCardButton.addEventListener('click', () => {
    deleteCardCallback(cardElement);
  });

  cardLikeButton.addEventListener("click", () => {
    handleLikesCallback(cardLikeButton);
  });

  return cardElement;
}

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

// Обработчик удаления карточки
function handleDelete(cardToDelete) {
  cardToDelete.remove();
}
// Обработчик лайка карточки
function handleLike(cardLikeButton) {
  if (cardLikeButton) {
    cardLikeButton.classList.toggle('card__like-button_is-active');
  }
}

export { 
  cardsList, 
  renderCard,
  createCard,
  createNewCard,
  handleDelete,
  handleLike
} 