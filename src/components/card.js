import { 
  deleteLikeCard,
  addLikeCard
} from '../components/api';

const cardTemplate = document.querySelector('#card-template').content;

// Отрисовка карточки
function renderCard(card, callbacksObject, userId) {
  const {
    openImageCallback,
    deleteCardCallback,
    handleLikesCallback
  } = callbacksObject;
  
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  cardLikeCounter.textContent = card.likes.length;
  
  if (userId !== card.owner._id) {
    deleteCardButton.style.display = "none";
    } else {
    deleteCardButton.addEventListener("click", () => {
      const cardId = card._id;
      deleteCardCallback(cardElement , cardId);
    });
  }

  const isLiked = card.likes.some((like) => like._id === userId);
  if (isLiked) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  // Слушатель лайка
  cardLikeButton.addEventListener("click", () => {
    handleLikesCallback(cardLikeCounter, cardLikeButton, card);
  });

  cardImage.addEventListener("click", () => {
    openImageCallback(cardImage);
  });

  return cardElement;
}

// Обработчик лайка карточки
function handleCardLike(cardLikeCounter, cardLikeButton, card) {
  if (cardLikeButton.classList.contains("card__like-button_is-active")) {
    deleteLikeCard(card._id)
    .then((res) => {
      cardLikeButton.classList.toggle("card__like-button_is-active");
      cardLikeCounter.textContent = res.likes.length;
    })
    .catch((err) => {
      console.error("Произошла ошибка при удалении лайка:", err);
    });
  } else {
    addLikeCard(card._id)
    .then((res) => {
      cardLikeButton.classList.toggle("card__like-button_is-active");
      cardLikeCounter.textContent = res.likes.length;
    })
    .catch((err) => {
      console.error("Произошла ошибка при добавлении лайка:", err);
    });
  }
}

export { 
  renderCard,
  handleCardLike
} 