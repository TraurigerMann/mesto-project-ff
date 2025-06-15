
const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');

// Отрисовка карточки
function renderCard(cardInfo, callbacksObject) {
  const {
    deleteCardCallback,
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

  deleteCardButton.addEventListener('click', () => {
    deleteCardCallback(cardElement);
  });

  cardLikeButton.addEventListener("click", () => {
    handleLikesCallback(cardLikeButton);
  });

  return cardElement;
}

// Обработчик удаления карточки
function handleCardDelete(cardToDelete) {
  cardToDelete.remove();
}

// Обработчик лайка карточки
function handleCardLike(cardLikeButton) {
  if (cardLikeButton) {
    cardLikeButton.classList.toggle('card__like-button_is-active');
  }
}

export { 
  cardsList, 
  renderCard,
  handleCardDelete,
  handleCardLike
} 